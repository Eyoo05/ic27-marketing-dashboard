import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Instagram", value: 42 },
  { name: "LinkedIn", value: 21 },
  { name: "Facebook", value: 18 },
  { name: "TikTok", value: 12 },
  { name: "Email", value: 7 },
];

const COLORS = [
  "#17462F",
  "#D4A64A",
  "#2F6B4F",
  "#0D3B66",
  "#C94C4C",
];

export default function EngagementChart() {
  return (
    <div className="rounded-2xl bg-white border border-[#E7DBC6] p-6 shadow-sm h-full">
      <h3 className="text-lg font-semibold text-[#17462F] mb-6">
        Engagement by Platform
      </h3>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={4}
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-2 mt-4">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <span>{item.name}</span>
            </div>

            <span className="font-semibold">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}