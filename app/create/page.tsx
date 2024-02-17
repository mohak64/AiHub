"use client";

import React, { useState } from "react";

import FormComponent from "@/components/FormComponent";
import { createLLM } from "../action";
import Link from "next/link";

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
    alert("LLM will be added after admin review");
  };

  return (
    // <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
    //   <Link href={`/`} passHref>
    //     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //       Home Page
    //     </button>
    //   </Link>
    //   <FormComponent
    //     newLLM={newLLM}
    //     handleInputChange={handleInputChange}
    //     handleSubmit={handleSubmit}
    //     setNewLLM={setNewLLM}
    //   />
    // </main>
    <main className="container mx-auto p-8 flex flex-col gap-10 items-center">
      {/* Link to navigate back to the Home Page */}
      <Link href={`/`} passHref>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Home Page
        </button>
      </Link>
      {/* Form component for creating a new LLM */}
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
