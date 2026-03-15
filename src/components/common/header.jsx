import React from "react";
import { Button } from "../ui/button";
import { AlignJustify, LogOut, UserCog } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/context/AuthProvider";

function Header({ setOpen }) {
  const { toast } = useToast();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    const check = confirm("Are you sure you want to Logout?");
    if (!check) return;

    try {
      await logout();

      toast({
        title: "Success🎉🎉",
        description: "You have been logged out successfully.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error🚨",
        description: error?.message || "Logout failed",
      });
    }
  };

  return (
    <header className="flex justify-between items-center px-2 py-3 bg-background border-b">
      <Button
        onClick={() => setOpen(true)}
        className="lg:hidden sm:block mx-5 flex items-center"
      >
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>

      <img
        className="logo lg:mx-8 lg:w-[400px] lg:h-[50px] w-[180px] h-[50px]"
        src="/OikiaWideLogo_Orange.png"
        alt=""
      />

      <DropdownMenu className="flex justify-end">
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarFallback className="bg-black text-white text-xl font-light">
              {user?.name.split(" ")[0]?.split("")[0].toUpperCase()}
              {user?.name.split(" ")[1]?.split("")[0].toUpperCase()}
              {user?.name.split(" ")[2]?.split("")[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>
            Logged In as {user?.name.split(" ")[0] || user?.name}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={() => navigate("/admin/account")}>
            <UserCog className="mr-2 h-5 w-5" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}

export default Header;
