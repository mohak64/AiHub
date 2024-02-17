// "use client";

import Image from "next/image";
import Link from "next/link";

export interface LlmProp {
  _id: string;
  name: string;
  image: {
    original: string;
  };
  provider: string;
  like: number;
}

interface Prop {
  llm: LlmProp;
  index: number;
}

function LlmCard({ llm }: Prop) {
  console.log(llm);
  return (
    <Link key={llm._id} href={`/models/${llm._id}`} passHref legacyBehavior>
      <a>
        <div className="max-w-sm rounded relative w-full transform transition duration-300 hover:scale-105 px-4">
          <div className="relative w-full h-[37vh]">
            <Image
              src="/logoAIman.png"
              alt={llm.name}
              fill
              className="rounded-xl"
            />
          </div>
          <div className="py-4 flex flex-col gap-3">
            <div className="flex justify-between items-center gap-1">
              <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
                {llm.name}
              </h2>
              <div className="py-1 px-2 bg-[#161921] rounded-sm">
                <p className="text-white text-sm font-bold capitalize">
                  {llm.provider}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center"></div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default LlmCard;
