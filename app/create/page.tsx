"use client";

import React, { useState } from "react";

import FormComponent from "@/components/FormComponent";
import { createLLM } from "../action";

function CreatePage() {
  const [newLLM, setNewLLM] = useState<{
    name: string;
    provider: string;
    category: string;
    description: string;
    exampleCode: string;
    useCases: string[];
    tryItLink: string;
  }>({
    name: "",
    provider: "",
    category: "",
    description: "",
    exampleCode: "",
    useCases: [],
    tryItLink: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewLLM({ ...newLLM, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createLLM(newLLM);
    setNewLLM({
      name: "",
      provider: "",
      category: "",
      description: "",
      exampleCode: "",
      useCases: [],
      tryItLink: "",
    });
    alert("LLM created successfully");
  };

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <FormComponent
        newLLM={newLLM}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        setNewLLM={setNewLLM}
      />
    </main>
  );
}

export default CreatePage;
