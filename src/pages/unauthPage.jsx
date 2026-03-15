import ComponentHeader from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

function UnAuthPage() {
  const navigate = useNavigate();

  return (
    <div className="h-[100vh] w-[100vw]">
      <ComponentHeader />
      <div className=" p-10 flex flex-col justify-center items-center gap-5">
        <p className="text-2xl">error</p>
        <h1 className="text-9xl text-red-600">401</h1>
        <h1 className="text-xl">You don't have access to view this page!</h1>
        <Button onClick={() => navigate("/auth/login")}>Go back</Button>
      </div>
    </div>
  );
}

export default UnAuthPage;
