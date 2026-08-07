import {
  Bell,
  CheckCircle,
  Users,
  TrendingUp,
} from "lucide-react";

const activities = [
  {
    icon: Bell,
    title: "Why Tunisia campaign launched",
    time: "5 min ago",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "42 new registrations",
    time: "20 min ago",
    color: "text-green-600",
  },
  {
    icon: TrendingUp,
    title: "Engagement increased 8%",
    time: "1 hour ago",
    color: "text-orange-500",
  },
  {
    icon: CheckCircle,
    title: "Speaker campaign approved",
    time: "Today",
    color: "text-emerald-600",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl bg-white border border-[#E8DDC8] p-6 shadow-sm">

      <h2 className="text-xl font-bold text-[#17462F]">
        Recent Activity
      </h2>

      <div className="mt-6 space-y-5">

        {activities.map((activity) => (
          <div
            key={activity.title}
            className="flex gap-4 items-center"
          >
            <activity.icon
              size={20}
              className={activity.color}
            />

            <div className="flex-1">
              <p className="font-medium">
                {activity.title}
              </p>

              <p className="text-sm text-gray-500">
                {activity.time}
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}