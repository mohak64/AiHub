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
        <div className="max-w-sm rounded relative w-full">
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
                {llm._id}
              </h2>
              <div className="py-1 px-2 bg-[#161921] rounded-sm">
                <p className="text-white text-sm font-bold capitalize">
                  {llm.provider}
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="./episodes.svg"
                  alt="episodes"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p className="text-base text-white font-bold">{llm.like}</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="./star.svg"
                  alt="star"
                  width={18}
                  height={18}
                  className="object-contain"
                />
                <p className="text-base font-bold text-[#FFAD49]">{llm.like}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default LlmCard;
