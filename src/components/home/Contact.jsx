import React, { useState } from "react";
import CommonForm from "../common/Form";
import { contactForm } from "@/lib/formConfig";

function HomeContact() {
  const [formData, setFormData] = useState("");
  const onSubmit = () => {};

  return (
    <>
      <div className="flex flex-col items-center justify-center lg:p-12 p-1">
        <h1 className="text-4xl text-center font-medium from-neutral-700 mb-7">
          Contact Us
        </h1>
        <form className="lg:w-1/3" action="">
          <CommonForm
            formControl={contactForm}
            onSubmit={onSubmit}
            formData={formData}
            setFormData={setFormData}
            buttonText={"Send"}
          />
        </form>
        {/* <div className="right"></div> */}
      </div>
      <hr />
    </>
  );
}

export default HomeContact;
