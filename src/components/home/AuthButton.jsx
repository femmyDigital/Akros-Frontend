import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

function AuthButton({ flex }) {
  const navigate = useNavigate();
  return (
    <div className={`${flex} `}>
      <Button
        onClick={() => navigate("/auth/login")}
        className="bg-blue-600 hover:bg-blue-800"
      >
        Login
      </Button>
      <Button
        onClick={() => navigate("/auth/signup")}
        className="bg-blue-600 hover:bg-blue-800"
      >
        Sign Up
      </Button>
    </div>
  );
}

export default AuthButton;
