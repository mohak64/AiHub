import { fetchLLM } from "./action";

import LlmCard, { LlmProp } from "@/components/LlmCard";
import LoadMore from "../components/LoadMore";
import Link from "next/link";
// import { data } from "./_data";

async function Home() {
  const data = await fetchLLM(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">
        Explore AI models and LLMs
      </h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: LlmProp, index: number) => (
          <Link
            key={item._id}
            href={`/models/${item._id}`}
            passHref
            legacyBehavior
          >
            <a>
              <LlmCard llm={item} index={index} />
            </a>
          </Link>
        ))}
      </section>
      <LoadMore />
    </main>
  );
}

export default Home;
