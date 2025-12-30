import { useState, useEffect } from "react";
import { getCampaigns } from "../api/campaignApi";
import type { Campaign } from "../types/campaign";

export const useCampaigns = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { campaigns, total } = await getCampaigns();
        setCampaigns(campaigns);
        setTotal(total);
      } catch (err) {
        setError("Failed to fetch campaigns");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { campaigns, loading, error, total };
};
