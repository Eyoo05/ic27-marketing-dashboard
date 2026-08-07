import { BarChart3, Globe, TrendingUp, DollarSign } from "lucide-react";
import { ResponsiveContainer, Tooltip, PieChart, Pie, Cell } from "recharts";

const regionData = [
  { name: "Tunisia (Host)", value: 38, color: "#17462F" },
  { name: "Europe", value: 28, color: "#D8B16A" },
  { name: "MENA Region", value: 18, color: "#8C7454" },
  { name: "Sub-Saharan Africa", value: 10, color: "#2B5C43" },
  { name: "Americas & Asia", value: 6, color: "#C59B4E" },
];

const conversionFunnelData = [
  { stage: "Website Visitors", count: 186000, conversion: "100%" },
  { stage: "Program Views", count: 74400, conversion: "40.0%" },
  { stage: "Registration Portal Started", count: 14880, conversion: "8.0%" },
  { stage: "Abstract Submissions", count: 2900, conversion: "1.56%" },
  { stage: "Confirmed Delegates", count: 742, conversion: "0.40%" },
];

const trafficAcquisition = [
  { source: "Direct & Search", visitors: "68,400", share: "36.8%", leads: "284" },
  { source: "LinkedIn Ads & Posts", visitors: "42,200", share: "22.7%", leads: "210" },
  { source: "Email Campaigns", visitors: "38,500", share: "20.7%", leads: "165" },
  { source: "Meta (FB & IG)", visitors: "24,100", share: "13.0%", leads: "62" },
  { source: "Partner Referral Links", visitors: "12,800", share: "6.8%", leads: "21" },
];

export default function Analytics() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#17462F]">
          Deep Marketing Analytics & Insights
        </h1>
        <p className="mt-2 text-[#8C7454]">
          Comprehensive breakdown of traffic sources, international reach, and registration funnels for IC27.
        </p>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-sm font-medium">Global Reach</span>
            <Globe className="text-[#17462F]" size={20} />
          </div>
          <p className="text-3xl font-bold text-[#17462F]">186,000</p>
          <p className="text-xs text-green-600 mt-2 font-medium">42 Countries Represented</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-sm font-medium">Overall Conversion Rate</span>
            <TrendingUp className="text-[#D8B16A]" size={20} />
          </div>
          <p className="text-3xl font-bold text-[#17462F]">3.98%</p>
          <p className="text-xs text-green-600 mt-2 font-medium">+0.8% higher than IC26</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-sm font-medium">Cost per Delegate (CPA)</span>
            <DollarSign className="text-[#17462F]" size={20} />
          </div>
          <p className="text-3xl font-bold text-[#17462F]">35.70 TND</p>
          <p className="text-xs text-green-600 mt-2 font-medium">Below budget target (45.00 TND)</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-sm font-medium">Marketing ROI</span>
            <BarChart3 className="text-[#D8B16A]" size={20} />
          </div>
          <p className="text-3xl font-bold text-[#17462F]">4.8x</p>
          <p className="text-xs text-green-600 mt-2 font-medium">Based on ticket revenue</p>
        </div>
      </div>

      {/* Visual Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Regional Distribution */}
        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#17462F] mb-1">Geographic Distribution</h2>
            <p className="text-xs text-[#8C7454] mb-4">Delegate origins by world region</p>

            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={regionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {regionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-2 text-xs pt-4 border-t border-[#E8DDC8]">
            {regionData.map((item) => (
              <div key={item.name} className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                  {item.name}
                </span>
                <span className="font-bold text-[#17462F]">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <h2 className="text-xl font-bold text-[#17462F] mb-1">Delegate Conversion Funnel</h2>
          <p className="text-xs text-[#8C7454] mb-6">User progression from first visit to confirmed registration</p>

          <div className="space-y-4">
            {conversionFunnelData.map((stage, idx) => (
              <div key={stage.stage} className="relative">
                <div className="flex justify-between text-xs font-semibold mb-1 text-[#3A3A3A]">
                  <span>{stage.stage}</span>
                  <span>{stage.count.toLocaleString()} ({stage.conversion})</span>
                </div>
                <div className="w-full bg-[#F8F5EF] h-7 rounded-xl overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-[#17462F] to-[#2B5C43] rounded-xl flex items-center px-3 text-white text-xs font-medium"
                    style={{ width: `${100 - idx * 20}%` }}
                  >
                    Stage {idx + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Traffic Acquisition Table */}
      <div className="bg-white rounded-2xl border border-[#E8DDC8] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[#E8DDC8]">
          <h2 className="text-xl font-bold text-[#17462F]">Traffic & Lead Sources Breakdown</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8F5EF] text-[#8C7454] text-xs font-semibold uppercase tracking-wider">
                <th className="p-4 pl-6">Acquisition Source</th>
                <th className="p-4">Visitors</th>
                <th className="p-4">Traffic Share</th>
                <th className="p-4 pr-6">Leads Generated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DDC8] text-sm text-[#3A3A3A]">
              {trafficAcquisition.map((row) => (
                <tr key={row.source} className="hover:bg-[#FCFAF5] transition-colors">
                  <td className="p-4 pl-6 font-semibold text-[#17462F]">{row.source}</td>
                  <td className="p-4 font-medium">{row.visitors}</td>
                  <td className="p-4">
                    <span className="inline-block px-2.5 py-1 text-xs font-bold bg-[#EFE5D3] text-[#17462F] rounded-lg">
                      {row.share}
                    </span>
                  </td>
                  <td className="p-4 pr-6 font-bold text-[#17462F]">{row.leads}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}