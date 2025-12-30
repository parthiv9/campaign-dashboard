import { useEffect, useState } from "react";
import { getAllInsights } from "../api/campaignApi";
import type { CampaignInsight } from "../types/insight";

export const useInsights = () => {
  const [insight, setInsight] = useState<CampaignInsight | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInsight = async () => {
      try {
        const data: CampaignInsight = await getAllInsights();
        setInsight(data);
      } catch {
        setError("Failed to fetch insights");
      } finally {
        setLoading(false);
      }
    };

    fetchInsight();
  }, []);

  console.log(insight);

  return { insight, loading, error };
};
