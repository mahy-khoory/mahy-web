"use client";

import { useState } from "react";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  companyName: "",
  companyWebsite: "",
  businessEmail: "",
  mobileNumber: "",
  country: "",
  enquiryType: "",
  message: "",
  agreed: false,
};

export function useContactForm() {
  const [form, setForm] = useState(INITIAL_STATE);

  const updateField = (name, value) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.agreed) {
      alert("must agree!");
      return;
    }
    // console.log("payload being snet", form);
  };

  return {
    form,
    updateField,
    handleSubmit,
  };
}
