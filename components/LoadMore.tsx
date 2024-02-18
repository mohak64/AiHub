"use client";

// import Image from "next/image";
// import { useInView } from "react-intersection-observer";
// import { useEffect, useState } from "react";

// import { fetchLLM } from "../app/action";
// import LlmCard, { LlmProp } from "./LlmCard";

// let page = 2;

// function LoadMore() {
//   const { ref, inView } = useInView();

//   const [data, setData] = useState<LlmProp[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     if (inView) {
//       setIsLoading(true);
//       const delay = 500;

//       const timeoutId = setTimeout(() => {
//         fetchLLM(page).then((res) => {
//           setData([...data, ...res]);
//           page++;
//         });

//         setIsLoading(false);
//       }, delay);

//       return () => clearTimeout(timeoutId);
//     }
//   }, [inView, data, isLoading]);

//   return (
//     <>
//       <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
//         {data.map((item: LlmProp, index: number) => (
//           <LlmCard key={item._id} llm={item} index={index} />
//         ))}
//       </section>
//       <section className="flex justify-center items-center w-full">
//         <div ref={ref}>
//           {inView && isLoading && (
//             <Image
//               src="./spinner.svg"
//               alt="spinner"
//               width={56}
//               height={56}
//               className="object-contain"
//             />
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// export default LoadMore;
// import Image from "next/image";
// import { useInView } from "react-intersection-observer";
// import { useEffect, useState } from "react";

// import { fetchLLM } from "../app/action";
// import LlmCard, { LlmProp } from "./LlmCard";

// let page = 2;

// function LoadMore() {
//   const { ref, inView } = useInView();

//   const [data, setData] = useState<LlmProp[]>([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     if (inView && !isLoading) {
//       setIsLoading(true);

//       fetchLLM(page)
//         .then((res) => {
//           if (!res) {
//             setIsLoading(false);
//             return;
//           }
//           setData((prevData) => [...prevData, ...res]);
//           page++;
//           setIsLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching LLM data:", error);
//           setIsLoading(false);
//         });
//     }
//   }, [inView, isLoading]);

//   return (
//     <>
//       <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
//         {data.map((item: LlmProp, index: number) => (
//           <LlmCard key={item._id} llm={item} index={index} />
//         ))}
//       </section>
//       <section className="flex justify-center items-center w-full">
//         <div ref={ref}>
//           {inView && isLoading && (
//             <Image
//               src="./spinner.svg"
//               alt="spinner"
//               width={56}
//               height={56}
//               className="object-contain"
//             />
//           )}
//         </div>
//       </section>
//     </>
//   );
// }

// export default LoadMore;

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { fetchLLM } from "../app/action";
import LlmCard, { LlmProp } from "./LlmCard";
import Image from "next/image";
import Link from "next/link";

interface LoadMoreProps {
  initialPage: number;
}

function LoadMore({ initialPage }: LoadMoreProps) {
  const { ref, inView } = useInView();

  const [data, setData] = useState<LlmProp[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    if (inView) {
      setIsLoading(true);
      const delay = 500;

      const timeoutId = setTimeout(() => {
        fetchLLM(page).then((res) => {
          if (!res) return;
          setData([...data, ...res]);
          setPage(page + 1);
        });

        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [inView, data, isLoading]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: LlmProp, index: number) => (
          <LlmCard key={item._id} llm={item} index={index} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          {inView && isLoading && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default LoadMore;
