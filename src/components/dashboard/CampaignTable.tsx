const campaigns = [
  {
    campaign: "Why Tunisia",
    platform: "Instagram",
    reach: "48.2K",
    engagement: "13.4%",
    registrations: 216,
    status: "🟢 Active",
  },
  {
    campaign: "Delegate Stories",
    platform: "TikTok",
    reach: "67.5K",
    engagement: "16.1%",
    registrations: 294,
    status: "🟢 Active",
  },
  {
    campaign: "Speaker Reveal",
    platform: "LinkedIn",
    reach: "18.7K",
    engagement: "9.4%",
    registrations: 74,
    status: "🟡 Scheduled",
  },
  {
    campaign: "Early Bird",
    platform: "Facebook",
    reach: "32.6K",
    engagement: "10.1%",
    registrations: 185,
    status: "🟢 Active",
  },
];

export default function CampaignTable() {
  return (
    <div className="rounded-2xl border border-[#E8DDC8] bg-white p-6 shadow-sm">

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-xl font-bold">
            Campaign Performance
          </h2>

          <p className="text-gray-500 text-sm">
            IC27 Marketing Campaigns
          </p>

        </div>

      </div>

      <table className="w-full">

        <thead>

          <tr className="text-left border-b">

            <th className="pb-4">Campaign</th>
            <th>Platform</th>
            <th>Reach</th>
            <th>Engagement</th>
            <th>Registrations</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {campaigns.map((item) => (

            <tr
              key={item.campaign}
              className="border-b last:border-none"
            >

              <td className="py-4 font-semibold">
                {item.campaign}
              </td>

              <td>{item.platform}</td>

              <td>{item.reach}</td>

              <td>{item.engagement}</td>

              <td>{item.registrations}</td>

              <td>{item.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}