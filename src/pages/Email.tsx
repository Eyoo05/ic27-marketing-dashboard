import { Send, Users, Eye, MousePointerClick, CheckCircle } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const emailPerformanceData = [
  { campaign: "Newsletter #1", openRate: 45, clickRate: 18 },
  { campaign: "Call for Abstracts", openRate: 52, clickRate: 24 },
  { campaign: "Early Bird Launch", openRate: 61, clickRate: 31 },
  { campaign: "Speaker Highlight", openRate: 41, clickRate: 15 },
  { campaign: "Venue Sneak Peek", openRate: 48, clickRate: 21 },
];

const broadcasts = [
  {
    id: "EMAIL-101",
    subject: "IC27 Tunisia 2027: Early Bird Registration Now Open!",
    segment: "All Registered & Prospects (4,500)",
    sentDate: "Jul 28, 2026",
    delivered: "4,482",
    openRate: "61.2%",
    clickRate: "31.4%",
    status: "Sent",
  },
  {
    id: "EMAIL-102",
    subject: "Call for Papers: Submit Your Research by Oct 1st",
    segment: "Academic & Medical Professionals (2,800)",
    sentDate: "Jul 15, 2026",
    delivered: "2,790",
    openRate: "52.4%",
    clickRate: "24.1%",
    status: "Sent",
  },
  {
    id: "EMAIL-103",
    subject: "Exclusive Sponsorship Opportunities for IC27",
    segment: "Corporate Partners & VIPs (850)",
    sentDate: "Jun 30, 2026",
    delivered: "846",
    openRate: "68.5%",
    clickRate: "42.0%",
    status: "Sent",
  },
  {
    id: "EMAIL-104",
    subject: "Keynote Announcement: Dr. Sarah Mansour confirmed!",
    segment: "All Subscribers (5,120)",
    sentDate: "Scheduled for Aug 12, 2026",
    delivered: "-",
    openRate: "-",
    clickRate: "-",
    status: "Scheduled",
  },
];

export default function Email() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#17462F]">
            Email Marketing Command Center
          </h1>
          <p className="mt-2 text-[#8C7454]">
            Manage broadcast campaigns, automated newsletters, and delegate communication drips.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#17462F] text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:bg-[#113523] transition-all self-start md:self-auto">
          <Send size={18} />
          Create Email Broadcast
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-sm font-medium">Total Subscribers</span>
            <Users className="text-[#17462F]" size={20} />
          </div>
          <p className="text-3xl font-bold text-[#17462F]">5,420</p>
          <p className="text-xs text-green-600 mt-2 font-medium">+380 new this month</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-sm font-medium">Avg Open Rate</span>
            <Eye className="text-[#D8B16A]" size={20} />
          </div>
          <p className="text-3xl font-bold text-[#17462F]">54.6%</p>
          <p className="text-xs text-green-600 mt-2 font-medium">Industry Benchmark: 22%</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-sm font-medium">Avg Click Rate (CTR)</span>
            <MousePointerClick className="text-[#17462F]" size={20} />
          </div>
          <p className="text-3xl font-bold text-[#17462F]">27.2%</p>
          <p className="text-xs text-green-600 mt-2 font-medium">+4.1% vs last campaign</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-sm font-medium">Deliverability</span>
            <CheckCircle className="text-emerald-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-[#17462F]">99.6%</p>
          <p className="text-xs text-gray-500 mt-2 font-medium">Bounce rate: 0.4%</p>
        </div>
      </div>

      {/* Performance Chart & Audience Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#17462F]">Recent Email Engagement</h2>
              <p className="text-xs text-[#8C7454] mt-1">Open Rate vs Click Rate (%)</p>
            </div>
            <div className="flex gap-4 text-xs font-medium">
              <span className="flex items-center gap-1 text-[#17462F]"><span className="w-2.5 h-2.5 rounded-full bg-[#17462F]"></span> Open Rate</span>
              <span className="flex items-center gap-1 text-[#D8B16A]"><span className="w-2.5 h-2.5 rounded-full bg-[#D8B16A]"></span> Click Rate</span>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={emailPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="campaign" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="openRate" fill="#17462F" radius={[6, 6, 0, 0]} />
                <Bar dataKey="clickRate" fill="#D8B16A" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Subscriber Segments */}
        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#17462F] mb-4">Subscriber Segments</h2>
            <div className="space-y-4">
              <div className="p-3 bg-[#F8F5EF] rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-[#17462F]">Confirmed Delegates</div>
                  <div className="text-xs text-gray-500">742 members</div>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold bg-emerald-100 text-emerald-800 rounded-full">100% Active</span>
              </div>

              <div className="p-3 bg-[#F8F5EF] rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-[#17462F]">Speakers & Presenters</div>
                  <div className="text-xs text-gray-500">210 members</div>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold bg-blue-100 text-blue-800 rounded-full">VIP</span>
              </div>

              <div className="p-3 bg-[#F8F5EF] rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-[#17462F]">Abstract Authors</div>
                  <div className="text-xs text-gray-500">1,450 members</div>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold bg-amber-100 text-amber-800 rounded-full">High Lead</span>
              </div>

              <div className="p-3 bg-[#F8F5EF] rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-[#17462F]">Newsletter Subscribers</div>
                  <div className="text-xs text-gray-500">3,018 members</div>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold bg-gray-100 text-gray-800 rounded-full">General</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Broadcast History Table */}
      <div className="bg-white rounded-2xl border border-[#E8DDC8] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[#E8DDC8]">
          <h2 className="text-xl font-bold text-[#17462F]">Recent Broadcast History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8F5EF] text-[#8C7454] text-xs font-semibold uppercase tracking-wider">
                <th className="p-4 pl-6">Email Subject</th>
                <th className="p-4">Target Audience Segment</th>
                <th className="p-4">Status / Date</th>
                <th className="p-4">Delivered</th>
                <th className="p-4">Open Rate</th>
                <th className="p-4 pr-6">Click Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DDC8] text-sm text-[#3A3A3A]">
              {broadcasts.map((b) => (
                <tr key={b.id} className="hover:bg-[#FCFAF5] transition-colors">
                  <td className="p-4 pl-6 font-semibold text-[#17462F]">
                    <div>{b.subject}</div>
                    <span className="text-xs text-gray-400 font-normal">{b.id}</span>
                  </td>
                  <td className="p-4 text-xs font-medium text-gray-600">{b.segment}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                        b.status === "Sent"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {b.status}
                    </span>
                    <div className="text-xs text-gray-400 mt-1">{b.sentDate}</div>
                  </td>
                  <td className="p-4 font-medium">{b.delivered}</td>
                  <td className="p-4 font-bold text-[#17462F]">{b.openRate}</td>
                  <td className="p-4 pr-6 font-bold text-[#D8B16A]">{b.clickRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}