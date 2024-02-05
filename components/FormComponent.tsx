import React from "react";

interface FormComponentProps {
  newLLM: {
    name: string;
    provider: string;
    category: string;
    description: string;
    exampleCode: string;
    useCases: string[];
    tryItLink: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setNewLLM: React.Dispatch<
    React.SetStateAction<{
      name: string;
      provider: string;
      category: string;
      description: string;
      exampleCode: string;
      useCases: string[];
      tryItLink: string;
    }>
  >;
}

function FormComponent({
  newLLM,
  handleInputChange,
  handleSubmit,
  setNewLLM,
}: FormComponentProps) {
  return (
    <form onSubmit={handleSubmit} className="form-container max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={newLLM.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Provider:
        </label>
        <input
          type="text"
          name="provider"
          value={newLLM.provider}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Category:
        </label>
        <input
          type="text"
          name="category"
          value={newLLM.category}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Description:
        </label>
        <textarea
          name="description"
          value={newLLM.description}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Example Code:
        </label>
        <textarea
          name="exampleCode"
          value={newLLM.exampleCode}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Use Cases (comma-separated):
        </label>
        <input
          type="text"
          name="useCases"
          value={newLLM.useCases.join(",")}
          onChange={(e) =>
            setNewLLM({ ...newLLM, useCases: e.target.value.split(",") })
          }
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">
          Try It Link:
        </label>
        <input
          type="url"
          name="tryItLink"
          value={newLLM.tryItLink}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Add LLM
      </button>
    </form>
  );
}

export default FormComponent;
