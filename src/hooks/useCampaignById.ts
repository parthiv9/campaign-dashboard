import { useEffect, useState } from "react";
import { getCampaignById } from "../api/campaignApi";
import type { Campaign } from "../types/campaign";

export const useCampaignById = (id: string) => {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchCampaign = async () => {
      try {
        const data = await getCampaignById(id);
        setCampaign(data);
      } catch (err) {
        console.error("Error fetching campaign:", err);
        setError("Failed to load campaign details");
      } finally {
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  return { campaign, loading, error };
};
