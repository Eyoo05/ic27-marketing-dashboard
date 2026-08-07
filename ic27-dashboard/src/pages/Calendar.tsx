import { ChevronLeft, ChevronRight, Clock, Plus } from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  category: "Campaign Launch" | "Email Blast" | "Deadline" | "Social Media" | "Webinar";
  date: string;
  time: string;
  channel: string;
}

const upcomingEvents: EventItem[] = [
  {
    id: "EVT-01",
    title: "Early Bird Discount Phase 1 Closing",
    category: "Deadline",
    date: "Aug 15, 2026",
    time: "23:59 CET",
    channel: "Registration Portal",
  },
  {
    id: "EVT-02",
    title: "Keynote Speaker Reveal Video Release",
    category: "Social Media",
    date: "Aug 18, 2026",
    time: "14:00 CET",
    channel: "YouTube & LinkedIn",
  },
  {
    id: "EVT-03",
    title: "Call for Abstracts Submission Deadline",
    category: "Deadline",
    date: "Oct 01, 2026",
    time: "23:59 CET",
    channel: "Academic Portal",
  },
  {
    id: "EVT-04",
    title: "Live Q&A Webinar with Congress Committee",
    category: "Webinar",
    date: "Aug 25, 2026",
    time: "16:00 CET",
    channel: "Zoom Live Stream",
  },
  {
    id: "EVT-05",
    title: "Monthly Newsletter #3 Distribution",
    category: "Email Blast",
    date: "Aug 28, 2026",
    time: "09:00 CET",
    channel: "Mailchimp Broadcast",
  },
];

const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

export default function Calendar() {
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#17462F]">
            IC27 Content & Campaign Calendar
          </h1>
          <p className="mt-2 text-[#8C7454]">
            Schedule and manage key milestones, marketing broadcasts, and promotional deadlines.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#17462F] text-white px-5 py-3 rounded-xl font-semibold shadow-md hover:bg-[#113523] transition-all self-start md:self-auto">
          <Plus size={18} />
          Schedule Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar View */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm">
          {/* Calendar Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold text-[#17462F]">August 2026</h2>
              <span className="px-3 py-1 bg-[#F8F5EF] text-[#8C7454] border border-[#E7DBC6] rounded-xl text-xs font-semibold">
                IC27 Marketing Schedule
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 border border-[#E7DBC6] rounded-xl hover:bg-[#F8F5EF]">
                <ChevronLeft size={18} />
              </button>
              <button className="p-2 border border-[#E7DBC6] rounded-xl hover:bg-[#F8F5EF]">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 text-center text-xs font-bold text-[#8C7454] mb-3">
            <div>MON</div>
            <div>TUE</div>
            <div>WED</div>
            <div>THU</div>
            <div>FRI</div>
            <div>SAT</div>
            <div>SUN</div>
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-2">
            {/* Empty slots for month padding */}
            <div className="h-20 bg-[#FCFAF5] rounded-xl p-2 opacity-30">27</div>
            <div className="h-20 bg-[#FCFAF5] rounded-xl p-2 opacity-30">28</div>
            <div className="h-20 bg-[#FCFAF5] rounded-xl p-2 opacity-30">29</div>
            <div className="h-20 bg-[#FCFAF5] rounded-xl p-2 opacity-30">30</div>
            <div className="h-20 bg-[#FCFAF5] rounded-xl p-2 opacity-30">31</div>

            {calendarDays.map((day) => {
              const isHighlight = day === 15 || day === 18 || day === 25 || day === 28;
              return (
                <div
                  key={day}
                  className={`h-20 rounded-xl p-2 border flex flex-col justify-between transition-all ${
                    isHighlight
                      ? "border-[#17462F] bg-[#F8F5EF]"
                      : "border-[#E8DDC8] bg-white hover:bg-[#FCFAF5]"
                  }`}
                >
                  <span className={`text-xs font-bold ${isHighlight ? "text-[#17462F]" : "text-gray-600"}`}>
                    {day}
                  </span>
                  {day === 15 && (
                    <span className="text-[10px] bg-red-100 text-red-800 font-semibold p-1 rounded leading-none truncate">
                      Early Bird
                    </span>
                  )}
                  {day === 18 && (
                    <span className="text-[10px] bg-blue-100 text-blue-800 font-semibold p-1 rounded leading-none truncate">
                      Video Release
                    </span>
                  )}
                  {day === 25 && (
                    <span className="text-[10px] bg-purple-100 text-purple-800 font-semibold p-1 rounded leading-none truncate">
                      Live Q&A
                    </span>
                  )}
                  {day === 28 && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold p-1 rounded leading-none truncate">
                      Newsletter #3
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar Event List */}
        <div className="bg-white p-6 rounded-2xl border border-[#E8DDC8] shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#17462F] mb-4">Upcoming Schedule</h2>
            <div className="space-y-4">
              {upcomingEvents.map((evt) => (
                <div key={evt.id} className="p-4 border border-[#E8DDC8] bg-[#FCFAF5] rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#17462F] px-2 py-0.5 bg-[#EFE5D3] rounded">
                      {evt.category}
                    </span>
                    <span className="text-xs text-gray-400">{evt.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[#17462F] mb-1">{evt.title}</h3>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                    <span className="flex items-center gap-1"><Clock size={12} /> {evt.time}</span>
                    <span className="font-medium text-[#8C7454]">{evt.channel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}