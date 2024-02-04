"use server";

const MAX_LIMIT = 8;

export async function fetchLLM(page: number) {
  const response = await fetch(
    `https://backendllm.onrender.com/api/llms?page=${page}&limit=${MAX_LIMIT}`
  );

  const data = await response.json();
  // console.log(data);
  return data;
}
