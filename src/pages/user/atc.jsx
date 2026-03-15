import CommonForm from "@/components/common/Form";
import { Card, CardContent } from "@/components/ui/card";
import { buyAirtimeForm } from "@/lib/formConfig";
import React, { useState } from "react";

function UserAtc() {
  const [formData, setFormData] = useState("");

  const handleSubmit = () => {};
  return (
    <div className="flex gap-5 flex-col items-center justify-center">
      <h1 className="text-2xl text-accent-foreground">Buy Airtime</h1>
      <Card className="w-full lg:w-1/2 pt-4">
        <CardContent>
          <CommonForm
            formData={formData}
            setFormData={setFormData}
            buttonText="Submit"
            formControl={buyAirtimeForm}
            onSubmit={handleSubmit}
          />
        </CardContent>
      </Card>
    </div>
  );
  s;
}

export default UserAtc;
