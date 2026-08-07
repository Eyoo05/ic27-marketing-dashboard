import { useState } from "react";
import { Megaphone, Plus, Filter, Search, TrendingUp, DollarSign, Target, CheckCircle2, Clock } from "lucide-react";

interface Campaign {
  id: string;
  name: string;
  channel: string;
  status: "Active" | "Scheduled" | "Completed" | "Draft";
  budget: string;
  spent: string;
  progress: number;
  leads: number;
  ctr: string;
  cpa: string;
  startDate: string;
  endDate: string;
}

const campaignsData: Campaign[] = [
  {
    id: "CAM-001",
    name: "IC27 Early Bird Registration Drive",
    channel: "Multi-channel (LinkedIn, Meta, Email)",
    status: "Active",
    budget: "12,500 TND",
    spent: "8,450 TND",
    progress: 68,
    leads: 482,
    ctr: "3.8%",
    cpa: "17.50 TND",
    startDate: "May 1, 2026",
    endDate: "Aug 31, 2026",
  },
  {
    id: "CAM-002",
    name: "African Scientific Research Spotlight",
    channel: "LinkedIn & Academic Forums",
    status: "Active",
    budget: "5,000 TND",
    spent: "3,200 TND",
    progress: 64,
    leads: 185,
    ctr: "4.2%",
    cpa: "17.30 TND",
    startDate: "Jun 15, 2026",
    endDate: "Sep 15, 2026",
  },
  {
    id: "CAM-003",
    name: "Call for Papers & Abstract Submissions",
    channel: "Email & University Outreach",
    status: "Active",
    budget: "3,800 TND",
    spent: "2,900 TND",
    progress: 76,
    leads: 290,
    ctr: "5.1%",
    cpa: "10.00 TND",
    startDate: "Apr 10, 2026",
    endDate: "Oct 1, 2026",
  },
  {
    id: "CAM-004",
    name: "Keynote Speaker Announcement Series",
    channel: "Social Media & PR Release",
    status: "Scheduled",
    budget: "4,000 TND",
    spent: "0 TND",
    progress: 0,
    leads: 0,
    ctr: "0%",
    cpa: "0 TND",
    startDate: "Sep 1, 2026",
    endDate: "Nov 30, 2026",
  },
  {
    id: "CAM-005",
    name: "Tunisia Heritage & Venue Showcase",
    channel: "Instagram & YouTube Video Ads",
    status: "Active",
    budget: "6,500 TND",
    spent: "4,100 TND",
    progress: 63,
    leads: 210,
    ctr: "2.9%",
    cpa: "19.50 TND",
    startDate: "Jul 1, 2026",
    endDate: "Dec 31, 2026",
  },
  {
    id: "CAM-006",
    name: "Sponsorship & Partner Acquisition",
    channel: "Direct B2B Outreach",
    status: "Completed",
    budget: "8,000 TND",
    spent: "7,850 TND",
    progress: 100,
    leads: 45,
    ctr: "6.4%",
    cpa: "174.40 TND",
    startDate: "Jan 15, 2026",
    endDate: "May 30, 2026",
  },
];

export default function Campaigns() {
  const [filter, setFilter] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCampaigns = campaignsData.filter((campaign) => {
    const matchesFilter = filter === "All" || campaign.status === filter;
    const matchesSearch =
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.channel.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div>
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#17462F]">
            Marketing Campaigns Management
          </h1>
          <p className="mt-2 text-[#8C7454]">
            Plan, monitor, and optimize marketing campaigns for IC27 Tunisia 2027.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#17462F] text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:bg-[#113523] transition-all self-start md:self-auto">
          <Plus size={18} />
          Create New Campaign
        </button>
      </div>

      {/* Overview KPI Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-sm font-medium">Total Campaigns</span>
            <Megaphone className="text-[#17462F]" size={20} />
          </div>
          <p className="text-3xl font-bold text-[#17462F]">6</p>
          <p className="text-xs text-green-600 mt-2 font-medium">4 Currently Active</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-sm font-medium">Total Budget Allocated</span>
            <DollarSign className="text-[#D8B16A]" size={20} />
          </div>
          <p className="text-3xl font-bold text-[#17462F]">39,800 TND</p>
          <p className="text-xs text-[#8C7454] mt-2 font-medium">26,500 TND Spent (66.5%)</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-sm font-medium">Leads Generated</span>
            <Target className="text-[#17462F]" size={20} />
          </div>
          <p className="text-3xl font-bold text-[#17462F]">1,212</p>
          <p className="text-xs text-green-600 mt-2 font-medium">+18.5% vs previous month</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center justify-between text-gray-500 mb-2">
            <span className="text-sm font-medium">Average CTR</span>
            <TrendingUp className="text-[#D8B16A]" size={20} />
          </div>
          <p className="text-3xl font-bold text-[#17462F]">4.32%</p>
          <p className="text-xs text-green-600 mt-2 font-medium">High conversion rate</p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#E8DDC8] shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Filter Tabs */}
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
          {["All", "Active", "Scheduled", "Completed"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === tab
                  ? "bg-[#17462F] text-white shadow-sm"
                  : "bg-[#F8F5EF] text-[#3A3A3A] hover:bg-[#EFE5D3]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-[#F8F5EF] border border-[#E7DBC6] rounded-xl text-sm outline-none focus:border-[#17462F]"
          />
        </div>
      </div>

      {/* Campaigns Table / Cards */}
      <div className="bg-white rounded-2xl border border-[#E8DDC8] shadow-sm overflow-hidden">
        <div className="p-6 border-b border-[#E8DDC8] flex justify-between items-center">
          <h2 className="text-xl font-bold text-[#17462F]">All Campaigns ({filteredCampaigns.length})</h2>
          <div className="flex items-center gap-2 text-xs text-[#8C7454]">
            <Filter size={14} /> Showing results for status: <strong>{filter}</strong>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F8F5EF] text-[#8C7454] text-xs font-semibold uppercase tracking-wider">
                <th className="p-4 pl-6">Campaign Name</th>
                <th className="p-4">Channel</th>
                <th className="p-4">Status</th>
                <th className="p-4">Budget / Spent</th>
                <th className="p-4">Leads</th>
                <th className="p-4">CTR</th>
                <th className="p-4">CPA</th>
                <th className="p-4 pr-6">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DDC8] text-sm text-[#3A3A3A]">
              {filteredCampaigns.map((c) => (
                <tr key={c.id} className="hover:bg-[#FCFAF5] transition-colors">
                  <td className="p-4 pl-6 font-semibold text-[#17462F]">
                    <div>{c.name}</div>
                    <span className="text-xs text-gray-400 font-normal">{c.id}</span>
                  </td>
                  <td className="p-4 text-xs font-medium text-gray-600">{c.channel}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                        c.status === "Active"
                          ? "bg-emerald-100 text-emerald-800"
                          : c.status === "Scheduled"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {c.status === "Active" && <CheckCircle2 size={12} />}
                      {c.status === "Scheduled" && <Clock size={12} />}
                      {c.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="font-medium">{c.spent} / {c.budget}</div>
                    <div className="w-28 bg-gray-200 h-1.5 rounded-full mt-1 overflow-hidden">
                      <div
                        className="bg-[#17462F] h-full rounded-full"
                        style={{ width: `${c.progress}%` }}
                      />
                    </div>
                  </td>
                  <td className="p-4 font-bold text-[#17462F]">{c.leads}</td>
                  <td className="p-4 font-medium">{c.ctr}</td>
                  <td className="p-4 font-medium">{c.cpa}</td>
                  <td className="p-4 pr-6 text-xs text-gray-500">
                    {c.startDate} - {c.endDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}