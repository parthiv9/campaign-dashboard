import { useLiveInsights } from "../../hooks/useLiveInsights";
import { Card } from "../../components/ui/card";

const LiveInsightCard = ({ campaignId }: { campaignId: string }) => {
  const data = useLiveInsights(campaignId);

  if (!data) return <p className="text-xs text-gray-400">Waiting...</p>;

  return (
    <>
      <Card className="p-2 text-xs  from-indigo-50 to-indigo-100">
        <p>Clicks: {data.clicks ?? 0}</p>
        <p>Impr: {data.impressions ?? 0}</p>
        <p>Conv: {data.conversions ?? 0}</p>
      </Card>
    </>
  );
};

export default LiveInsightCard;
