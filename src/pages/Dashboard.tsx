import CampaignTable from "../common/dashboard/CampaignTable";
import OverviewCards from "../common/dashboard/OverviewCards";
import TrendChart from "../common/dashboard/TrendChart";
import DashboardLayout from "../common/layout/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <OverviewCards />
        <TrendChart />
        <CampaignTable />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
