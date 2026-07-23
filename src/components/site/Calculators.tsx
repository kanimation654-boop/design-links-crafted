import { useState } from "react";
import { useI18n } from "@/i18n";
import { Brick, Wrench, Layers, Paintbrush, Grid3x3, Home, Anchor, Calculator as CalcIcon } from "lucide-react";

type Calc = {
  id: string;
  title: string;
  icon: any;
  fields: { key: string; label: string; def?: number; step?: number }[];
  compute: (v: Record<string, number>) => { label: string; value: string }[];
};

const calcs: Calc[] = [
  {
    id: "brick",
    title: "Brick Calculator",
    icon: Brick,
    fields: [
      { key: "length", label: "Wall Length (ft)", def: 10 },
      { key: "height", label: "Wall Height (ft)", def: 10 },
      { key: "thickness", label: "Wall Thickness (in)", def: 9 },
    ],
    compute: ({ length, height, thickness }) => {
      const wallVol = length * height * (thickness / 12);
      const brickVol = (9 * 4.5 * 3) / 1728; // cubic ft per standard brick
      const bricks = Math.ceil((wallVol / brickVol) * 1.05);
      return [
        { label: "Wall Volume", value: `${wallVol.toFixed(2)} cu ft` },
        { label: "Brick Required", value: `${bricks.toLocaleString()}` },
      ];
    },
  },
  {
    id: "concrete",
    title: "Concrete Calculator",
    icon: Layers,
    fields: [
      { key: "length", label: "Length (ft)", def: 20 },
      { key: "width", label: "Width (ft)", def: 15 },
      { key: "depth", label: "Depth (in)", def: 6 },
    ],
    compute: ({ length, width, depth }) => {
      const vol = length * width * (depth / 12);
      const cement = (vol / 5.5) * 1; // 1:2:4 mix roughly, in bags
      const sand = (vol / 5.5) * 2 * 1.54;
      const agg = (vol / 5.5) * 4 * 1.54;
      return [
        { label: "Volume", value: `${vol.toFixed(2)} cu ft` },
        { label: "Cement (bags)", value: `${Math.ceil(cement * 0.22)} ` },
        { label: "Sand", value: `${sand.toFixed(1)} cu ft` },
        { label: "Aggregate", value: `${agg.toFixed(1)} cu ft` },
      ];
    },
  },
  {
    id: "steel",
    title: "Steel Calculator",
    icon: Wrench,
    fields: [
      { key: "concreteVol", label: "Concrete Volume (cu ft)", def: 100 },
      { key: "ratio", label: "Steel Ratio (kg per cu ft)", def: 3 },
    ],
    compute: ({ concreteVol, ratio }) => {
      const kg = concreteVol * ratio;
      return [
        { label: "Steel Required", value: `${kg.toFixed(0)} kg` },
        { label: "Approx Tons", value: `${(kg / 1000).toFixed(2)} t` },
      ];
    },
  },
  {
    id: "paint",
    title: "Paint Calculator",
    icon: Paintbrush,
    fields: [
      { key: "length", label: "Room Length (ft)", def: 15 },
      { key: "width", label: "Room Width (ft)", def: 12 },
      { key: "height", label: "Room Height (ft)", def: 10 },
      { key: "coats", label: "Number of Coats", def: 2 },
    ],
    compute: ({ length, width, height, coats }) => {
      const wall = 2 * (length + width) * height;
      const ceil = length * width;
      const total = (wall + ceil) * coats;
      const gallons = total / 350;
      return [
        { label: "Total Area", value: `${total.toFixed(0)} sq ft` },
        { label: "Paint Required", value: `${gallons.toFixed(2)} gallons` },
      ];
    },
  },
  {
    id: "tile",
    title: "Tile Calculator",
    icon: Grid3x3,
    fields: [
      { key: "length", label: "Floor Length (ft)", def: 12 },
      { key: "width", label: "Floor Width (ft)", def: 10 },
      { key: "tileL", label: "Tile Length (in)", def: 24 },
      { key: "tileW", label: "Tile Width (in)", def: 24 },
    ],
    compute: ({ length, width, tileL, tileW }) => {
      const floor = length * width;
      const tileArea = (tileL * tileW) / 144;
      const tiles = Math.ceil((floor / tileArea) * 1.1);
      return [
        { label: "Floor Area", value: `${floor.toFixed(2)} sq ft` },
        { label: "Tiles Needed", value: `${tiles} (incl 10% waste)` },
      ];
    },
  },
  {
    id: "roof",
    title: "Roof Slab Calculator",
    icon: Home,
    fields: [
      { key: "length", label: "Slab Length (ft)", def: 30 },
      { key: "width", label: "Slab Width (ft)", def: 20 },
      { key: "thickness", label: "Slab Thickness (in)", def: 6 },
    ],
    compute: ({ length, width, thickness }) => {
      const vol = length * width * (thickness / 12);
      const cement = Math.ceil((vol / 5.5) * 0.22);
      return [
        { label: "Slab Volume", value: `${vol.toFixed(2)} cu ft` },
        { label: "Cement (bags)", value: `${cement}` },
        { label: "Steel Estimate", value: `${(vol * 3).toFixed(0)} kg` },
      ];
    },
  },
  {
    id: "foundation",
    title: "Foundation Calculator",
    icon: Anchor,
    fields: [
      { key: "length", label: "Total Wall Length (ft)", def: 100 },
      { key: "width", label: "Foundation Width (ft)", def: 2 },
      { key: "depth", label: "Foundation Depth (ft)", def: 3 },
    ],
    compute: ({ length, width, depth }) => {
      const vol = length * width * depth;
      return [
        { label: "Excavation Volume", value: `${vol.toFixed(2)} cu ft` },
        { label: "PCC (3\")", value: `${(length * width * 0.25).toFixed(2)} cu ft` },
        { label: "Brick (approx)", value: `${Math.ceil(vol * 13)}` },
      ];
    },
  },
  {
    id: "material",
    title: "Material Estimation",
    icon: CalcIcon,
    fields: [
      { key: "area", label: "Covered Area (sq ft)", def: 1500 },
      { key: "rate", label: "Rate (PKR per sq ft)", def: 3500 },
    ],
    compute: ({ area, rate }) => {
      const total = area * rate;
      return [
        { label: "Estimated Cost", value: `PKR ${total.toLocaleString()}` },
        { label: "Per Marla (272 sqft)", value: `PKR ${(rate * 272).toLocaleString()}` },
      ];
    },
  },
];

export default function Calculators() {
  const { t } = useI18n();
  const [active, setActive] = useState(calcs[0].id);
  const current = calcs.find((c) => c.id === active)!;

  return (
    <section id="calc" className="py-24 bg-gradient-to-b from-muted/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-accent font-bold">— Smart Tools —</span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-black text-primary">{t("calcTitle")}</h2>
          <p className="mt-4 text-muted-foreground">{t("calcSub")}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr] reveal">
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2">
            {calcs.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-left rtl:text-right whitespace-nowrap transition-all ${
                  active === c.id
                    ? "bg-gradient-primary text-white shadow-elegant"
                    : "bg-white border border-border hover:border-primary/30 text-foreground"
                }`}
              >
                <c.icon className="h-4 w-4 shrink-0" />
                {c.title}
              </button>
            ))}
          </div>
          <CalcCard key={current.id} calc={current} />
        </div>
      </div>
    </section>
  );
}

function CalcCard({ calc }: { calc: Calc }) {
  const { t } = useI18n();
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(calc.fields.map((f) => [f.key, f.def ?? 0]))
  );
  const [result, setResult] = useState<{ label: string; value: string }[] | null>(null);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-elegant border border-border animate-scale-in">
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent text-white">
          <calc.icon className="h-6 w-6" />
        </div>
        <h3 className="text-2xl font-black text-primary">{calc.title}</h3>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {calc.fields.map((f) => (
          <label key={f.key} className="block">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{f.label}</span>
            <input
              type="number"
              value={values[f.key]}
              onChange={(e) => setValues({ ...values, [f.key]: parseFloat(e.target.value) || 0 })}
              className="mt-1.5 w-full rounded-lg border border-border bg-muted/30 px-4 py-2.5 text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => setResult(calc.compute(values))}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-bold text-white shadow-elegant hover:scale-105 transition-transform"
        >
          {t("calculate")}
        </button>
        <button
          onClick={() => {
            setValues(Object.fromEntries(calc.fields.map((f) => [f.key, f.def ?? 0])));
            setResult(null);
          }}
          className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-muted"
        >
          {t("reset")}
        </button>
      </div>

      {result && (
        <div className="mt-6 rounded-2xl bg-primary/5 border border-primary/20 p-6 animate-fade-up">
          <div className="text-xs font-bold uppercase tracking-widest text-accent">{t("result")}</div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {result.map((r) => (
              <div key={r.label} className="flex justify-between items-baseline gap-3 rounded-lg bg-white px-4 py-3 border border-border">
                <span className="text-sm text-muted-foreground">{r.label}</span>
                <span className="font-black text-primary">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
