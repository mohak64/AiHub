// "use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
export interface LlmProp {
  _id: string;
  name: string;
  image: {
    original: string;
  };
  provider: string;
  like: number;
  description: string;
  useCases: string[];
}

interface Prop {
  llm: LlmProp;
  index: number;
}

function LlmCard({ llm }: Prop) {
  console.log(llm);
  return (
    // <Link key={llm._id} href={`/models/${llm._id}`} passHref legacyBehavior>
    //   <a>
    //     <div className="max-w-sm rounded relative w-full transform transition duration-300 hover:scale-105 px-4">
    //       <div className="relative w-full h-[37vh]">
    //         <Image
    //           src="/logoAIman.png"
    //           alt={llm.name}
    //           fill
    //           className="rounded-xl"
    //         />
    //       </div>
    //       <div className="py-4 flex flex-col gap-3">
    //         <div className="flex justify-between items-center gap-1">
    //           <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
    //             {llm.name}
    //           </h2>
    //           <div className="py-1 px-2 bg-[#161921] rounded-sm">
    //             <p className="text-white text-sm font-bold capitalize">
    //               {llm.provider}
    //             </p>
    //           </div>
    //         </div>
    //         <div className="flex gap-4 items-center"></div>
    //       </div>
    //     </div>
    //   </a>
    // </Link>

    <div className="w-[95%] rounded-md border flex flex-col">
      <div className="p-4 flex flex-col justify-between h-full">
        <div>
          <h1 className="inline-flex items-center text-lg font-semibold">
            About {llm.name} &nbsp; <ArrowUpRight className="h-4 w-4" />
          </h1>
          <p className="mt-3 text-sm text-gray-600">{llm.description}</p>
          <div className="mt-4">
            {llm.useCases.map((useCase: string, index: number) => (
              <span
                key={index}
                className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
              >
                #{useCase}
              </span>
            ))}
          </div>
        </div>
        <Link key={llm._id} href={`/models/${llm._id}`} passHref legacyBehavior>
          <a>
            <button
              type="button"
              className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Learn More
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default LlmCard;
