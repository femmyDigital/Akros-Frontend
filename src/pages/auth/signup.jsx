import CommonForm from "@/components/common/Form";
import { signinFormControl } from "@/lib/formConfig";
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import apiRequest from "@/lib/apiRequest";

function Signup() {
  const [formData, setFormData] = useState("");
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (formData) => apiRequest.post("/auth/signup", formData),
    onSuccess: (data) => {
      console.log(data?.data?.message);
      setFormData("");
      toast({
        title: "Success🎉🎉",
        description: data?.message,
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error🚨🚨",
        description: error?.response?.data?.message || "Something went wrong",
      });
      console.log(error?.response?.data?.message);
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
          Sign Up
        </h1>
        <p className="mt-1 text-[13px]">
          Already have an account
          <Link
            className="form-medium ml-2 text-primary hover:underline text-blue-600"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControl={signinFormControl}
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        buttonText={"Sign Up"}
        // buttonText={isLoading ? <Spinner /> : "Sign In"}
        // isBtnDisabled={isLoading}
      />
    </div>
  );
}

export default Signup;
