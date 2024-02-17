// // Import useRouter

// async function ModelPage() {
//   return (
//     <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
//       <h2 className="text-3xl text-white font-bold">
//         Explore AI models and LLMs with ID:
//       </h2>
//     </main>
//   );
// }

// export default ModelPage;
// "use client";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// function ModelPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const [modelData, setModelData] = useState(null);

//   // useEffect(() => {
//   //   if (id) {
//   //     // Fetch data based on the ID
//   //     // Example API call
//   //     fetch(`/api/models/${id}`)
//   //       .then((response) => response.json())
//   //       .then((data) => setModelData(data))
//   //       .catch((error) => console.error("Error fetching model data:", error));
//   //   }
//   // }, [id]);

//   return (
//     <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
//       <h2 className="text-3xl text-white font-bold">
//         Explore AI models and LLMs with ID: {id}
//       </h2>
//       {modelData && (
//         <div>
//           <h3>Model Data</h3>
//           <p>ID: {modelData}</p>
//           {/* Display other model data */}
//         </div>
//       )}
//     </main>
//   );
// }

// export default ModelPage;

"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ModelPage() {
  // Change export to default
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [Id, SetId] = useState<string | null>(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const pathnameParts = url.pathname.split("/");
    const id = pathnameParts[pathnameParts.length - 1];
    SetId(id);
    // You can now use the extracted ID
    // For example, fetch data based on the ID
    // fetch(`/api/models/${id}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle data
    //   })
    //   .catch(error => console.error('Error fetching model data:', error));
  }, [pathname, searchParams]);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">
        Explore AI models and LLMs with ID: {Id}
      </h2>
    </main>
  );
}
