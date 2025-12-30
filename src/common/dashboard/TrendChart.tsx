import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useInsights } from "../../hooks/useInsights";

const TrendChart = () => {
  const { insight, loading, error } = useInsights();

  if (loading) return <p>Loading insights...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!insight) return null;

  const data = [
    { name: "CTR", value: insight.avg_ctr ?? 0 },
    { name: "CPC", value: insight.avg_cpc ?? 0 },
    { name: "Conv Rate", value: insight.avg_conversion_rate ?? 0 },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="font-semibold mb-4">Performance Trends</h2>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#6366f1"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChart;
