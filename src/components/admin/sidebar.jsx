import {
  ChartNoAxesCombined,
  CheckSquare,
  Expand,
  FileSpreadsheet,
  HelpCircle,
  History,
  LayoutDashboard,
  MessageCircleMoreIcon,
  PhoneCall,
  Tv,
  Wifi,
} from "lucide-react";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "history",
    label: "History ",
    path: "/admin/history",
    icon: <FileSpreadsheet />,
  },
  {
    id: "notification",
    label: "Notification",
    path: "/admin/notification",
    icon: <MessageCircleMoreIcon />,
  },

  {
    id: "transaction",
    label: "Transactions  ",
    path: "/admin/transaction",
    icon: <CheckSquare />,
  },

  {
    id: "help",
    label: "Help & Support",
    path: "/admin/help",
    icon: <HelpCircle />,
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();

  return (
    <nav className="mt-8 flex-col flex gap-2">
      {adminSidebarMenuItems.map((menuItem) => (
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

function AdminSidebar({ open, setOpen }) {
  return (
    <Fragment>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 my-3">
                <ChartNoAxesCombined size={30} />
                <span>Admin Lander</span>
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
          <h1 className="text-1xl font-extrabold">Admin Lander </h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
}

export default AdminSidebar;
