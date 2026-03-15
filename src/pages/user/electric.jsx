import CommonForm from "@/components/common/Form";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { amountForm, buyElectricityForm } from "@/lib/formConfig";
import React, { useState } from "react";

function UserElectric() {
  const [formData, setFormData] = useState("");
  const [accountName, setAccountName] = useState("Tunde Musa Obi");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ accountName, ...formData });
  };

  return (
    <div className="flex gap-5 flex-col items-center justify-center">
      <h1 className="text-2xl text-accent-foreground">Buy Electricity</h1>
      <Card className="w-full lg:w-1/2 pt-4">
        <CardContent>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
              <Input
                disabled
                className="border-black mt-5 text-center shadow-md font-normal text-stone-950"
                type="text"
                value={accountName}
              />
              <CommonForm
                formData={formData}
                setFormData={setFormData}
                buttonText="Submit"
                formControl={amountForm}
                onSubmit={handleSubmit}
              />
            </DialogContent>
          </Dialog>
          <CommonForm
            formData={formData}
            setFormData={setFormData}
            buttonText="Submit"
            formControl={buyElectricityForm}
            onSubmit={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default UserElectric;
