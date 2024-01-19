import CompUpload from "@/components/Comp.Upload";

export default function Home() {
  return (
    <main className="flex flex-col p-3 gap-4 items-center  justify-center h-[100vh]">
      <CompUpload />
      <article>
        <p className="text-xs">
          Check the{" "}
          <code className="border p-1 rounded-sm bg-gray-200">
            public/uploads
          </code>{" "}
          folder for your uploads.
        </p>
      </article>
    </main>
  );
}
