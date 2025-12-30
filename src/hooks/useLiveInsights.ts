import { useEffect, useState } from "react";
import { streamCampaignInsights } from "../api/campaignApi";

export const useLiveInsights = (campaignId: string) => {
  const [metrics, setMetrics] = useState<any>(null);

  // useEffect(() => {
  //   if (!campaignId) return;
  //   const stop = streamCampaignInsights(campaignId, (data) => setMetrics(data));
  //   return stop;
  // }, [campaignId]);

  useEffect(() => {
    if (!campaignId) {
      return;
    }
    const stop = streamCampaignInsights(campaignId, (data) => setMetrics(data));
    return stop;
  }, [campaignId]);

  return metrics;
};
