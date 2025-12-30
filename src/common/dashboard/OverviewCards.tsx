import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/ui/card";
import { useInsights } from "../../hooks/useInsights";
import Loader from "../Loader";

const OverviewCards = () => {
  const { insight, loading } = useInsights();

  if (loading) return <Loader />;
  if (!insight) return null;

  const data = [
    {
      title: "Total Campaigns",
      value: insight.total_campaigns,
      color: "text-indigo-600",
    },
    {
      title: "Active",
      value: insight.active_campaigns,
      color: "text-green-600",
    },
    {
      title: "Paused",
      value: insight.paused_campaigns,
      color: "text-yellow-600",
    },
    {
      title: "Completed",
      value: insight.completed_campaigns,
      color: "text-gray-600",
    },
  ];
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((stat, i) => (
        <Card key={i} className="hover:shadow-md transition">
          <CardHeader>
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default OverviewCards;
