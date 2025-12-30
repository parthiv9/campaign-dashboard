import { Home } from "lucide-react";
import { Card } from "../../components/ui/card";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-white border-r shadow-sm p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6 text-indigo-600">CampaignPro</h2>
        <nav className="space-y-2">
          <button className="flex items-center gap-2 text-indigo-600 font-medium">
            <Home size={18} /> Dashboard
          </button>
          {/* <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600">
            <BarChart3 size={18} /> Analytics
          </button> */}
        </nav>
      </div>
      <Card className="p-3 text-xs text-gray-500 mt-6">
        © 2025 Parth makwana
      </Card>
    </aside>
  );
};

export default Sidebar;
