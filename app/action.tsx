"use server";

export async function fetchLLM(page: number) {
  const response = await fetch(
    `https://backendllm.onrender.com/api/llms?page=${page}`
  );

  const data = await response.json();
  return data;
}

interface NewLLMData {
  name: string;
  provider: string;
  category: string;
  description: string;
  exampleCode: string;
  useCases: string[];
  tryItLink: string;
}

export async function createLLM(newLLMData: NewLLMData) {
  try {
    const response = await fetch("https://backendllm.onrender.com/api/llms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLLMData),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(
        `Failed to create LLM. Status: ${response.status}, Message: ${errorResponse.message}`
      );
    }

    const createdLLM = await response.json();
    return createdLLM;
  } catch (error: any) {
    console.error("Failed to create LLM:", error.message);
    throw new Error(`Failed to create LLM. ${error.message}`);
  }
}
