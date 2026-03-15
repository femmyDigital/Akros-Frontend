import CommonForm from "@/components/common/Form";
import { Card, CardContent } from "@/components/ui/card";
import { buyDataForm } from "@/lib/formConfig";
import React, { useState } from "react";

function UserData() {
  const [formData, setFormData] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="flex gap-5 flex-col items-center justify-center">
      <h1 className="text-2xl text-accent-foreground">Buy Data</h1>
      <Card className="w-full lg:w-1/2 pt-4">
        <CardContent>
          <CommonForm
            formData={formData}
            setFormData={setFormData}
            buttonText="Submit"
            formControl={buyDataForm}
            onSubmit={handleSubmit}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default UserData;
