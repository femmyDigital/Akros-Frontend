import React from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "./header";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full bg-slate-300 items-center justify-center ">
      <AuthHeader />
      <div className="flex w-[80vw] lg:w-[70%] lg:mt-14 lg:h-[80vh] justify-center items-center ">
        <div className="hidden lg:flex w-[70%] h-full space-y-6 flex-col justify-center items-center bg-black ">
          <h1 className="text-5xl text-white font-semibold tracking-tight">
            Akros
          </h1>

          <img
            src="/logo.png"
            alt="uuuuuu"
            className="w-[150px] h-[150px] mt-5"
          />
        </div>
        <div className="flex-1 lg:flex w-1/3 h-full rounded-lg shadow-lg lg:shadow-none lg:rounded-none justify-center items-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          {<Outlet />}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
