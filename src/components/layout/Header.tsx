import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

export default function Header() {
  return (
    <header className="h-20 bg-white border-b border-[#E7DBC6] flex items-center justify-between px-8">

      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-[#17462F]">
          Good Evening 👋
        </h1>

        <p className="text-sm text-[#8C7454] mt-1">
          Welcome back! Here's what's happening with IC27 marketing today.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="flex items-center bg-[#F8F5EF] border border-[#E7DBC6] rounded-xl px-4 py-2 w-72">

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search campaigns..."
            className="ml-3 bg-transparent outline-none w-full text-sm"
          />

        </div>

        {/* Date */}
        <button className="flex items-center gap-2 rounded-xl border border-[#E7DBC6] bg-[#F8F5EF] px-4 py-2 text-sm font-medium hover:bg-[#EFE5D3]">

          Last 30 Days

          <ChevronDown size={16} />

        </button>

        {/* Notification */}
        <div className="relative">

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E7DBC6] bg-[#F8F5EF]">

            <Bell size={19} />

          </button>

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-600"></span>

        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 rounded-xl border border-[#E7DBC6] bg-[#F8F5EF] px-3 py-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#17462F] text-white font-bold">
            M
          </div>

          <div>

            <p className="text-sm font-semibold">
              Marketing Team
            </p>

            <p className="text-xs text-gray-500">
              IC27 Tunisia
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}