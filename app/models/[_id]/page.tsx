"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface LlmData {
  _id: string;
  category: string;
  description: string;
  exampleCode: string;
  name: string;
  provider: string;
  tryItLink: string;
  useCases: string[];
}

export default function ModelPage() {
  const pathname = usePathname();
  const [llmData, setLlmData] = useState<LlmData | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchLlmData = async () => {
      setLoading(true);
      try {
        const url = new URL(window.location.href);
        const pathnameParts = url.pathname.split("/");
        const id = pathnameParts[pathnameParts.length - 1];
        const response = await fetch(
          `https://backendllm.onrender.com/api/llms/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch LLM data");
        }
        const data = await response.json();
        setLlmData(data);
      } catch (error) {
        console.error("Error fetching LLM data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLlmData();
  }, [pathname]);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.main
      className="sm:p-8 p-4 flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {loading && <p>Loading...</p>}
      {llmData && (
        <div className="max-w-4xl w-full bg-gray-900 shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-semibold text-white">
                {llmData.name}
              </h2>
              <Link href={`/`} passHref>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Home Page
                </button>
              </Link>
            </div>
            <p className="text-gray-300 mb-4">
              Category: <span className="text-white">{llmData.category}</span>
            </p>
            <p className="text-gray-300 mb-4">
              Description:{" "}
              <span className="text-white">{llmData.description}</span>
            </p>
            <p className="text-gray-300 mb-4">
              Provider: <span className="text-white">{llmData.provider}</span>
            </p>
            <div className="mb-4">
              <p className="text-gray-300 mb-1">Example Code:</p>
              <CopyToClipboard text={llmData.exampleCode} onCopy={handleCopy}>
                <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded">
                  {copied ? "Copied!" : "Copy"}
                </button>
              </CopyToClipboard>
              <div className="mt-2 p-2 bg-gray-800 rounded">
                <SyntaxHighlighter language="javascript" style={materialDark}>
                  {llmData.exampleCode}
                </SyntaxHighlighter>
              </div>
            </div>

            <p className="text-gray-300 mb-4">
              Try It Link:{" "}
              <a
                href={llmData.tryItLink}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                {llmData.tryItLink}
              </a>
            </p>
            <p className="text-gray-300 mb-4">
              Use Cases:{" "}
              <span className="text-white">{llmData.useCases.join(", ")}</span>
            </p>
          </div>
        </div>
      )}
    </motion.main>
  );
}
