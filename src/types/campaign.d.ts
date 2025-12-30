export interface Campaign {
  id: string;
  name: string;
  brand_id: string;
  status: "active" | "paused" | "draft" | "completed";
  budget: number;
  daily_budget: number;
  platforms: string[];
  created_at: string;
}
