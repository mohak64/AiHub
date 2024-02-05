import LoadMore from "@/components/LoadMore";

async function CreatePage() {
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <LoadMore />
    </main>
  );
}

export default CreatePage;
