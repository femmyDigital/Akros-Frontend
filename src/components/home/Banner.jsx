import React from "react";
import AuthButton from "./AuthButton";

function HomeBanner() {
  return (
    <div className="bg-cyan-800 flex justify-center items-end lg:h-[30rem] h-[25rem]">
      <AuthButton flex={"flex mb-20 flex-row gap-5"} />
    </div>
  );
}

export default HomeBanner;
