import axiosClient from "./axiosClient";
import type { Campaign } from "../types/campaign";
import type { CampaignInsight } from "../types/insight";

export const getCampaigns = async (): Promise<{
  campaigns: Campaign[];
  total: number;
}> => {
  return await axiosClient.get("/campaigns");
};

export const getCampaignById = async (id: string): Promise<Campaign> => {
  const response: any = await axiosClient.get(`/campaigns/${id}`);
  return response.campaign;
};

export const getAllInsights = async (): Promise<CampaignInsight> => {
  const response: any = await axiosClient.get("/campaigns/insights");
  return response.insights;
};

export const getCampaignInsights = async (
  id: string
): Promise<CampaignInsight> => {
  return await axiosClient.get(`/campaigns/${id}/insights`);
};

let activeStreams: Record<string, EventSource> = {};

export const streamCampaignInsights = (
  id: string,
  onMessage: (data: any) => void,
  onError?: (error: any) => void
) => {
  if (activeStreams[id]) {
    console.warn(`Stream for ${id} already active, skipping duplicate`);
    return () => {};
  }

  const eventSource = new EventSource(
    `https://mixo-fe-backend-task.vercel.app/campaigns/${id}/insights/stream`
  );

  activeStreams[id] = eventSource;

  eventSource.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      onMessage(data);
    } catch (error) {
      console.error("Error parsing message data:", error);
    }
  };

  eventSource.onerror = (error) => {
    console.warn("SSE Stream Warning:", error);
    onError?.(error);
  };

  return () => {
    eventSource.close();
    delete activeStreams[id];
  };
};
