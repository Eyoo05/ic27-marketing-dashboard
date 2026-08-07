import { Users, ThumbsUp, Share2, MessageSquare, TrendingUp, PlaySquare } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const followerGrowthData = [
  { month: "Jan", linkedin: 1200, instagram: 800, twitter: 600 },
  { month: "Feb", linkedin: 1600, instagram: 1100, twitter: 850 },
  { month: "Mar", linkedin: 2100, instagram: 1500, twitter: 1200 },
  { month: "Apr", linkedin: 2800, instagram: 2000, twitter: 1600 },
  { month: "May", linkedin: 3500, instagram: 2700, twitter: 2100 },
  { month: "Jun", linkedin: 4400, instagram: 3400, twitter: 2600 },
  { month: "Jul", linkedin: 5200, instagram: 4100, twitter: 3100 },
];

const topPosts = [
  {
    id: 1,
    platform: "LinkedIn",
    author: "IC27 Official",
    content: "Thrilled to announce Tunisia as the host destination for International Congress 2027! 🇹🇳 Over 1,000 global delegates gathering in Hammamet.",
    likes: 642,
    comments: 88,
    shares: 134,
    date: "2 days ago",
    engagement: "8.4%",
  },
  {
    id: 2,
    platform: "Instagram",
    author: "@ic27_tunisia",
    content: "Discover the breathtaking Yasmine Hammamet Conference Venue 🏛️✨ Early bird registrations now open!",
    likes: 1240,
    comments: 112,
    shares: 205,
    date: "4 days ago",
    engagement: "11.2%",
  },
  {
    id: 3,
    platform: "Twitter / X",
    author: "@IC27Congress",
    content: "Abstract submission portal is officially LIVE! Submit your research papers for IC27 Tunisia before October 1st. 📄💡",
    likes: 315,
    comments: 42,
    shares: 96,
    date: "1 week ago",
    engagement: "6.1%",
  },
];

export default function SocialMedia() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#17462F]">
          Social Media Analytics & Hub
        </h1>
        <p className="mt-2 text-[#8C7454]">
          Track cross-platform audience growth, engagement rates, and top viral content for IC27.
        </p>
      </div>

      {/* Social Platforms Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-lg">LinkedIn</span>
            <Users className="text-blue-600" size={20} />
          </div>
          <p className="text-2xl font-bold text-[#17462F]">5,200</p>
          <p className="text-xs text-gray-500 mt-1">Followers (+22% this month)</p>
          <div className="mt-4 flex items-center justify-between text-xs border-t border-[#E8DDC8] pt-3 text-gray-600">
            <span>Engagement: <strong>7.4%</strong></span>
            <span>Posts: <strong>48</strong></span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 bg-pink-50 text-pink-700 rounded-lg">Instagram</span>
            <Users className="text-pink-600" size={20} />
          </div>
          <p className="text-2xl font-bold text-[#17462F]">4,100</p>
          <p className="text-xs text-gray-500 mt-1">Followers (+31% this month)</p>
          <div className="mt-4 flex items-center justify-between text-xs border-t border-[#E8DDC8] pt-3 text-gray-600">
            <span>Engagement: <strong>10.8%</strong></span>
            <span>Posts: <strong>72</strong></span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 bg-gray-100 text-gray-800 rounded-lg">Twitter / X</span>
            <Users className="text-gray-800" size={20} />
          </div>
          <p className="text-2xl font-bold text-[#17462F]">3,100</p>
          <p className="text-xs text-gray-500 mt-1">Followers (+15% this month)</p>
          <div className="mt-4 flex items-center justify-between text-xs border-t border-[#E8DDC8] pt-3 text-gray-600">
            <span>Engagement: <strong>5.2%</strong></span>
            <span>Posts: <strong>120</strong></span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-semibold px-2.5 py-1 bg-red-50 text-red-700 rounded-lg">YouTube</span>
            <PlaySquare className="text-red-600" size={20} />
          </div>
          <p className="text-2xl font-bold text-[#17462F]">1,850</p>
          <p className="text-xs text-gray-500 mt-1">Subscribers (+18% this month)</p>
          <div className="mt-4 flex items-center justify-between text-xs border-t border-[#E8DDC8] pt-3 text-gray-600">
            <span>Views: <strong>24.5K</strong></span>
            <span>Videos: <strong>14</strong></span>
          </div>
        </div>
      </div>

      {/* Growth Chart & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#17462F]">Follower Growth Over Time</h2>
              <p className="text-xs text-[#8C7454] mt-1">Total combined reach across active platforms</p>
            </div>
            <div className="flex gap-4 text-xs font-medium">
              <span className="flex items-center gap-1 text-blue-600"><span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span> LinkedIn</span>
              <span className="flex items-center gap-1 text-pink-600"><span className="w-2.5 h-2.5 rounded-full bg-pink-600"></span> Instagram</span>
              <span className="flex items-center gap-1 text-gray-800"><span className="w-2.5 h-2.5 rounded-full bg-gray-800"></span> X</span>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={followerGrowthData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="linkedin" stroke="#2563eb" fill="#2563eb" fillOpacity={0.15} />
                <Area type="monotone" dataKey="instagram" stroke="#db2777" fill="#db2777" fillOpacity={0.15} />
                <Area type="monotone" dataKey="twitter" stroke="#1f2937" fill="#1f2937" fillOpacity={0.15} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Key Social Highlights */}
        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#17462F] mb-4">Social Performance</h2>
            <div className="space-y-4">
              <div className="p-3 bg-[#F8F5EF] rounded-xl flex items-center justify-between">
                <span className="text-sm text-[#3A3A3A] font-medium">Avg Engagement Rate</span>
                <span className="text-sm font-bold text-[#17462F]">7.8%</span>
              </div>
              <div className="p-3 bg-[#F8F5EF] rounded-xl flex items-center justify-between">
                <span className="text-sm text-[#3A3A3A] font-medium">Monthly Impressions</span>
                <span className="text-sm font-bold text-[#17462F]">142.5K</span>
              </div>
              <div className="p-3 bg-[#F8F5EF] rounded-xl flex items-center justify-between">
                <span className="text-sm text-[#3A3A3A] font-medium">Link Clicks to IC27</span>
                <span className="text-sm font-bold text-[#17462F]">12,840</span>
              </div>
              <div className="p-3 bg-[#F8F5EF] rounded-xl flex items-center justify-between">
                <span className="text-sm text-[#3A3A3A] font-medium">Social Share of Voice</span>
                <span className="text-sm font-bold text-[#17462F]">64%</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#E8DDC8] flex items-center justify-between text-xs text-[#8C7454]">
            <span>Next scheduled post in: <strong>2h 15m</strong></span>
            <TrendingUp size={16} className="text-[#17462F]" />
          </div>
        </div>
      </div>

      {/* Top Posts Section */}
      <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
        <h2 className="text-xl font-bold text-[#17462F] mb-6">Top Performing Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topPosts.map((post) => (
            <div key={post.id} className="border border-[#E8DDC8] bg-[#FCFAF5] p-5 rounded-xl flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-[#17462F] px-2 py-0.5 bg-[#EFE5D3] rounded">
                    {post.platform}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                </div>
                <p className="text-sm text-[#3A3A3A] font-medium mb-4 leading-relaxed">
                  "{post.content}"
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-[#E7DBC6]">
                  <span className="flex items-center gap-1"><ThumbsUp size={14} /> {post.likes}</span>
                  <span className="flex items-center gap-1"><MessageSquare size={14} /> {post.comments}</span>
                  <span className="flex items-center gap-1"><Share2 size={14} /> {post.shares}</span>
                  <span className="font-bold text-[#17462F]">{post.engagement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}