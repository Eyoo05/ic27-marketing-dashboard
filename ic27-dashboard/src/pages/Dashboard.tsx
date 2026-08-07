import KPICards from "../components/dashboard/KPICards";
import CampaignTable from "../components/dashboard/CampaignTable";
import Funnel from "../components/dashboard/Funnel";
import TopCampaign from "../components/dashboard/TopCampaign";
import TrafficSources from "../components/dashboard/TrafficSources";
import RecentActivity from "../components/dashboard/RecentActivity";

import ReachChart from "../components/charts/ReachChart";
import EngagementChart from "../components/charts/EngagementChart";

export default function Dashboard() {
  return (
    <div>
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#17462F]">
          Marketing Analytics Dashboard
        </h1>
        <p className="mt-2 text-[#8C7454]">
          Monitor the performance of the International Congress Tunisia 2027 marketing campaigns in real time.
        </p>
      </div>

      {/* KPI Cards */}
      <KPICards />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2">
          <ReachChart />
        </div>
        <div>
          <EngagementChart />
        </div>
      </div>

      {/* Campaign Table */}
      <div className="mt-8">
        <CampaignTable />
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <Funnel />
        <TopCampaign />
        <div className="rounded-2xl border border-[#E8DDC8] bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-[#17462F]">
            Marketing Goals
          </h2>

          <div className="mt-6">
            <div className="flex justify-between">
              <span>Delegate Registrations</span>
              <strong>742 / 1000</strong>
            </div>

            <div className="mt-3 h-3 rounded-full bg-gray-200">
              <div className="h-3 w-[74%] rounded-full bg-[#17462F]" />
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <span>Reach Goal</span>
                <strong>186K / 250K</strong>
              </div>

              <div className="flex justify-between">
                <span>Followers Goal</span>
                <strong>3.5K / 5K</strong>
              </div>

              <div className="flex justify-between">
                <span>Countries Reached</span>
                <strong>42 / 60</strong>
              </div>

              <div className="flex justify-between">
                <span>Campaign Completion</span>
                <strong>74%</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <TrafficSources />
        <RecentActivity />
      </div>
    </div>
  );
}