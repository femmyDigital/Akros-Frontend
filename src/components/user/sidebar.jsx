import {
  ChartNoAxesCombined,
  Expand,
  FileSpreadsheet,
  HelpCircle,
  LayoutDashboard,
  PhoneCall,
  Tv,
  Wifi,
} from "lucide-react";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const userSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/user/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "airtime",
    label: "Buy Airtime",
    path: "/user/airtime",
    icon: <PhoneCall />,
  },
  {
    id: "data",
    label: "Buy Data",
    path: "/user/data",
    icon: <Wifi />,
  },

  {
    id: "tv",
    label: "TV Subscription ",
    path: "/user/tv",
    icon: <Tv />,
  },
  {
    id: "electric",
    label: "Pay Electricity Bill",
    path: "/user/electric",
    icon: <Expand />,
  },
  {
    id: "atc",
    label: "Airtime to Cash ",
    path: "/user/atc",
    icon: <Expand />,
  },
  {
    id: "history",
    label: "Transaction History",
    path: "/user/history",
    icon: <FileSpreadsheet />,
  },
  {
    id: "help",
    label: "Help & Support",
    path: "/user/help",
    icon: <HelpCircle />,
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();

  return (
    <nav className="mt-8 flex-col flex gap-2">
      {userSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
          className="flex items-center gap-2 rounded-md p-3 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}

function UserSidebar({ open, setOpen }) {
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 my-3">
                <ChartNoAxesCombined size={30} />
                <h1 className="text-3xl font-bold">Akros</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2"
        >
          <ChartNoAxesCombined size={30} />
          <h1 className="text-3xl font-bold">Akros</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
}

export default UserSidebar;
