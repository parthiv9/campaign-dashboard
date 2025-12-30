import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";

const Header = () => {
  return (
    <header className="bg-white border-b shadow-sm flex items-center justify-between px-6 py-3">
      <h1 className="font-bold text-lg">Dashboard Overview</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-500">Parth Makwana</span>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/40" />
          <AvatarFallback>PM</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
