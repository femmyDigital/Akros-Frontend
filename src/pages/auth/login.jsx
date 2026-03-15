import CommonForm from "@/components/common/Form";
import { useToast } from "@/hooks/use-toast";
import apiRequest from "@/lib/apiRequest";
import { loginFormControl } from "@/lib/formConfig";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (formData) =>
      apiRequest.post("/auth/login", formData, {
        withCredentials: true,
      }),
    onSuccess: (data) => {
      toast({
        title: "Success🎉🎉",
        description: data?.data?.message,
      });
      setFormData("");
      queryClient.invalidateQueries(["checkAuth"]);
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error🚨🚨",
        description: error?.message || "Login failed",
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-medium tracking-tight text-foreground ">
          Log In to your Account
        </h1>
        <p className="mt-1 text-[13px]">
          Don't have an account
          <Link
            className="form-medium ml-2 text-primary hover:underline text-blue-600"
            to="/auth/signup"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControl={loginFormControl}
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Log In"}
        // buttonText={isLoading ? <Spinner /> : "Sign In"}
        // isBtnDisabled={isLoading}
      />
      <p>
        <Link
          className="form-medium ml-2 text-primary hover:underline text-blue-600 text-[13px]"
          to="/forgetPassword"
        >
          Forget Password?
        </Link>
      </p>
    </div>
  );
}

export default Login;
