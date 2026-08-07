import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Instagram", value: 42 },
  { name: "Facebook", value: 21 },
  { name: "LinkedIn", value: 16 },
  { name: "Website", value: 14 },
  { name: "Email", value: 7 },
];

const COLORS = [
  "#17462F",
  "#D4A64A",
  "#0D3B66",
  "#2F855A",
  "#C94C4C",
];

export default function TrafficSources() {
  return (
    <div className="rounded-2xl bg-white border border-[#E8DDC8] p-6 shadow-sm">

      <h2 className="text-xl font-bold text-[#17462F]">
        Traffic Sources
      </h2>

      <div className="h-64">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              innerRadius={55}
              outerRadius={85}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="space-y-2">

        {data.map((item, index) => (

          <div
            key={item.name}
            className="flex justify-between text-sm"
          >

            <div className="flex items-center gap-2">

              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              {item.name}

            </div>

            <strong>{item.value}%</strong>

          </div>

        ))}

      </div>

    </div>
  );
}