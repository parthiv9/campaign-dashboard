import { useCampaigns } from "../../hooks/useCampaigns";
import { Badge } from "../../components/ui/badge";
import Loader from "../Loader";
import LiveInsightCard from "./LiveInsightCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialog";
import { useState } from "react";
import { useCampaignById } from "../../hooks/useCampaignById";
import { Card, CardContent } from "../../components/ui/card";

const CampaignTable = () => {
  const { campaigns, loading } = useCampaigns();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const {
    campaign,
    loading: detailLoading,
    error,
  } = useCampaignById(selectedId || "");

  if (loading) return <Loader />;

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-bold text-lg mb-4">Campaigns</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Status</th>
              <th className="p-3">Budget</th>
              <th className="p-3">Daily</th>
              <th className="p-3">Platforms</th>
              <th className="p-3">Live</th>
            </tr>
          </thead>

          <tbody>
            {campaigns.map((c) => (
              <tr
                key={c.id}
                onClick={() => setSelectedId(c.id)}
                className="border-b hover:bg-gray-50 transition cursor-pointer"
              >
                <td className="p-3 font-medium">{c.name}</td>
                <td className="p-3">
                  <Badge
                    variant={c.status === "active" ? "default" : "secondary"}
                  >
                    {c.status}
                  </Badge>
                </td>
                <td className="p-3">${c.budget}</td>
                <td className="p-3">${c.daily_budget}</td>
                <td className="p-3">{c.platforms.join(", ")}</td>
                <td className="p-3">
                  <LiveInsightCard campaignId={c.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Dialog
        open={!!selectedId}
        onOpenChange={(open) => !open && setSelectedId(null)}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Campaign Details</DialogTitle>
          </DialogHeader>

          {detailLoading && <Loader />}
          {error && <p className="text-red-500">{error}</p>}
          {!detailLoading && campaign && (
            <Card className="border-none shadow-none">
              <CardContent className="text-sm space-y-2">
                <p>
                  <strong>Name:</strong> {campaign.name}
                </p>
                <p>
                  <strong>Status:</strong> {campaign.status}
                </p>
                <p>
                  <strong>Budget:</strong> ${campaign.budget}
                </p>
                <p>
                  <strong>Daily Budget:</strong> ${campaign.daily_budget}
                </p>
                <p>
                  <strong>Platforms:</strong>
                  {campaign.platforms?.join(", ") || "N/A"}
                </p>
                <p>
                  <strong>Created:</strong>
                  {new Date(campaign.created_at).toLocaleString()}
                </p>
              </CardContent>
            </Card>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CampaignTable;
