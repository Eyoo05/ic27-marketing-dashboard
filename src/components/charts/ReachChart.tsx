import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { day: "Mon", reach: 12000 },
  { day: "Tue", reach: 18000 },
  { day: "Wed", reach: 26000 },
  { day: "Thu", reach: 21000 },
  { day: "Fri", reach: 34000 },
  { day: "Sat", reach: 48000 },
  { day: "Sun", reach: 42000 },
];

export default function ReachChart() {
  return (
    <div className="bg-white rounded-2xl border border-[#E8DDC8] p-6 shadow-sm">

      <div className="flex justify-between mb-6">

        <div>

          <h2 className="font-bold text-xl">
            Reach Evolution
          </h2>

          <p className="text-gray-500">
            Last 7 Days
          </p>

        </div>

        <h2 className="text-3xl font-bold text-[#17462F]">
          186K
        </h2>

      </div>

      <div className="h-80">

        <ResponsiveContainer>

          <LineChart data={data}>

            <CartesianGrid strokeDasharray="3 3"/>

            <XAxis dataKey="day"/>

            <Tooltip/>

            <Line
              dataKey="reach"
              stroke="#17462F"
              strokeWidth={4}
              dot={{ r: 5 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}