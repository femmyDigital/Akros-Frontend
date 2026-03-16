import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "../ui/button";

const AuthHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-[#1d1c25] text-white py-3 px-6 flex justify-between items-center shadow-md fixed top-0 left-0 z-50">
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => navigate("/user/dashboard")}
      >
        <img src="/.png" alt="logo" className="w-10 h-10 rounded-full" />
        <h2 className="text-3xl font-bold tracking-wide">Akros</h2>
      </div>

      <DropdownMenu className="flex justify-end">
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarFallback className="bg-slate-300 text-black text-xl font-light">
              U
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mr-4 mt-2 bg-[#23222c] border-none shadow-lg rounded-xl text-white w-44">
          <DropdownMenuLabel className="text-gray-300">User</DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default AuthHeader;
