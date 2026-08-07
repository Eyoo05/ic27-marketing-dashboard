import {
  Eye,
  Users,
  MousePointerClick,
  UserCheck,
  Globe,
  TrendingUp,
} from "lucide-react";

const cards = [
  {
    title: "Total Reach",
    value: "186.4K",
    growth: "+12.6%",
    icon: Eye,
    color: "text-blue-600",
  },
  {
    title: "Engagement",
    value: "8.9%",
    growth: "+1.2%",
    icon: TrendingUp,
    color: "text-green-600",
  },
  {
    title: "Registrations",
    value: "742",
    growth: "+54",
    icon: UserCheck,
    color: "text-emerald-600",
  },
  {
    title: "Followers",
    value: "+3,580",
    growth: "+9%",
    icon: Users,
    color: "text-purple-600",
  },
  {
    title: "Clicks",
    value: "18.4K",
    growth: "+7%",
    icon: MousePointerClick,
    color: "text-orange-500",
  },
  {
    title: "Countries",
    value: "42",
    growth: "+5",
    icon: Globe,
    color: "text-red-500",
  },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl bg-white border border-[#E8DDC8] p-6 shadow-sm hover:shadow-lg transition"
        >
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-sm">{card.title}</span>

            <card.icon className={card.color} size={22} />
          </div>

          <h2 className="text-4xl font-bold mt-5">{card.value}</h2>

          <p className="mt-3 text-green-600 font-semibold">
            {card.growth}
          </p>
        </div>
      ))}
    </div>
  );
}