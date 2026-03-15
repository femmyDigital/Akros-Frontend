import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-slate-500 items-center justify-center ">
      <div className="flex w-[70%] h-[80vh] justify-center items-center ">
        <div className="flex w-[70%] h-full space-y-6 flex-col justify-center items-center bg-black ">
          <h1 className="text-5xl text-white font-semibold tracking-tight">
            Hello World!
          </h1>

          <img
            src="/logo.png"
            alt="uuuuuu"
            className="w-[150px] h-[150px] mt-5"
          />
        </div>
        <div className="flex w-1/3 h-full justify-center items-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          {<Outlet />}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
