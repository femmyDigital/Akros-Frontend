import { Button } from "@/components/ui/button";
import {
  AlignJustify,
  ChartNoAxesCombined,
  ChartNoAxesCombinedIcon,
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthButton from "./AuthButton";

const menuItems = [
  {
    id: "home",
    label: "Home",
    path: "/home",
    icon: "",
  },
  {
    id: "about",
    label: "About",
    path: "/about",
    icon: "",
  },
  {
    id: "service",
    label: "Services",
    path: "/service",
    icon: "",
  },

  {
    id: "pricing",
    label: "Pricing",
    path: "/pricing",
    icon: "",
  },
  {
    id: "testimonial",
    label: "Testimonial",
    path: "/testimonial",
    icon: "",
  },
  {
    id: "contact",
    label: "Contact",
    path: "/contact",
    icon: "",
  },
];

const MenuItem = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex gap-5">
      {menuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
          className="flex items-center gap-2 rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer w-[100%]"
        >
          <span className="">{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
};

const MenuItemCol = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-col gap-3 items-center justify-center ">
      {menuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            navigate(menuItem.path);
            setOpen ? setOpen(false) : null;
          }}
          className="flex w-auto rounded-md p-3 text-muted-foreground hover:bg-muted hover:text-foreground cursor-pointer"
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
      <AuthButton flex={"flex-row flex gap-3 m-2"} />
    </nav>
  );
};

function HomeHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Fragment>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetContent side="left" className="w-56">
            <div className="flex flex-col h-full">
              <SheetHeader className="border-b">
                <SheetTitle className="flex gap-2 mt-5 mb-5">
                  <ChartNoAxesCombined size={30} />
                  <span>Menu</span>
                </SheetTitle>
              </SheetHeader>
              <MenuItemCol />
            </div>
          </SheetContent>
        </Sheet>
      </Fragment>

      <div className="flex items-center justify-between border-b p-3 lg:px-5">
        <img
          className="h-[40px] cursor-pointer w-[40px]"
          src="./logo.png"
          alt=""
        />

        <div className="flex items-center justify-end">
          <Button
            onClick={() => setOpen(true)}
            className="lg:hidden sm:block mx-5"
          >
            <AlignJustify />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>

        <div className="lg:flex justify-between items-center gap-[10rem] hidden  ">
          <MenuItem />
          <AuthButton
            flex={"lg:flex justify-between items-center hidden gap-5"}
          />
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
