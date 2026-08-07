import { useState } from "react";
import { Bell, Link as LinkIcon, User, Save, CheckCircle2 } from "lucide-react";

export default function Settings() {
  const [saved, setSaved] = useState(false);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [campaignCap, setCampaignCap] = useState("50000");

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-5xl">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#17462F]">
            Settings & System Configuration
          </h1>
          <p className="mt-2 text-[#8C7454]">
            Manage IC27 marketing preferences, API integrations, and team access permissions.
          </p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-[#17462F] text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:bg-[#113523] transition-all self-start md:self-auto"
        >
          {saved ? <CheckCircle2 size={18} /> : <Save size={18} />}
          {saved ? "Saved Successfully!" : "Save Changes"}
        </button>
      </div>

      <div className="space-y-6">
        {/* Event & Congress Profile */}
        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-[#17462F]" size={22} />
            <div>
              <h2 className="text-xl font-bold text-[#17462F]">Congress Details</h2>
              <p className="text-xs text-[#8C7454]">Official event parameters and target milestones</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <label className="block font-semibold text-[#3A3A3A] mb-2">Event Title</label>
              <input
                type="text"
                defaultValue="International Congress Tunisia 2027 (IC27)"
                className="w-full p-3 bg-[#F8F5EF] border border-[#E7DBC6] rounded-xl outline-none focus:border-[#17462F]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#3A3A3A] mb-2">Host Venue & Location</label>
              <input
                type="text"
                defaultValue="Yasmine Hammamet Conference Center, Tunisia"
                className="w-full p-3 bg-[#F8F5EF] border border-[#E7DBC6] rounded-xl outline-none focus:border-[#17462F]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#3A3A3A] mb-2">Target Delegate Goal</label>
              <input
                type="number"
                defaultValue="1000"
                className="w-full p-3 bg-[#F8F5EF] border border-[#E7DBC6] rounded-xl outline-none focus:border-[#17462F]"
              />
            </div>
            <div>
              <label className="block font-semibold text-[#3A3A3A] mb-2">Max Campaign Budget Cap (TND)</label>
              <input
                type="text"
                value={campaignCap}
                onChange={(e) => setCampaignCap(e.target.value)}
                className="w-full p-3 bg-[#F8F5EF] border border-[#E7DBC6] rounded-xl outline-none focus:border-[#17462F]"
              />
            </div>
          </div>
        </div>

        {/* Connected Marketing Platforms */}
        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <LinkIcon className="text-[#D8B16A]" size={22} />
            <div>
              <h2 className="text-xl font-bold text-[#17462F]">Marketing API Integrations</h2>
              <p className="text-xs text-[#8C7454]">Connected social ad networks & analytics services</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 border border-[#E8DDC8] bg-[#FCFAF5] rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-sm">
                  li
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#17462F]">LinkedIn Campaign Manager</h3>
                  <p className="text-xs text-gray-500">Connected account: ic27-marketing-org</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                Connected
              </span>
            </div>

            <div className="p-4 border border-[#E8DDC8] bg-[#FCFAF5] rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-sm">
                  GA
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#17462F]">Google Analytics 4 (GA4)</h3>
                  <p className="text-xs text-gray-500">Property ID: G-IC27TUNISIA</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                Active
              </span>
            </div>

            <div className="p-4 border border-[#E8DDC8] bg-[#FCFAF5] rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-sm">
                  MC
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#17462F]">Mailchimp Email API</h3>
                  <p className="text-xs text-gray-500">List: IC27-Delegates-Master</p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                Synced
              </span>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Bell className="text-[#17462F]" size={22} />
            <div>
              <h2 className="text-xl font-bold text-[#17462F]">Alerts & Notifications</h2>
              <p className="text-xs text-[#8C7454]">Configure how you receive real-time campaign updates</p>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between p-3 bg-[#F8F5EF] rounded-xl">
              <div>
                <span className="font-semibold text-[#17462F]">Registration Threshold Alerts</span>
                <p className="text-xs text-gray-500">Notify team whenever 50 new delegates register</p>
              </div>
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={(e) => setEmailAlerts(e.target.checked)}
                className="w-5 h-5 accent-[#17462F] cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between p-3 bg-[#F8F5EF] rounded-xl">
              <div>
                <span className="font-semibold text-[#17462F]">Weekly Executive Digest</span>
                <p className="text-xs text-gray-500">Receive weekly PDF summary of performance metrics</p>
              </div>
              <input
                type="checkbox"
                checked={weeklyDigest}
                onChange={(e) => setWeeklyDigest(e.target.checked)}
                className="w-5 h-5 accent-[#17462F] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}