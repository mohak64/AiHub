import { fetchLLM } from "./action";

import LlmCard, { LlmProp } from "@/components/LlmCard";
import LoadMore from "../components/LoadMore";
import Link from "next/link";

// import { data } from "./_data";

async function Home() {
  const data = await fetchLLM(1);
  console.log(data);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 ">
      <div className=" sm:block md:flex  items-center justify-between ">
        <h2 className="text-3xl text-white font-bold">
          Explore AI models and LLMs
        </h2>
        <Link href={`/create`} passHref legacyBehavior>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New LLM
          </button>
        </Link>
      </div>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: LlmProp, index: number) => (
          <LlmCard key={item._id} llm={item} index={index} />
        ))}
      </section>

      <LoadMore initialPage={2} />
    </main>
  );
}

export default Home;
