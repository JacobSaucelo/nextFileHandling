"use client";

import { useState } from "react";

export default function CompUpload() {
  const [fileData, setFileData] = useState(null);

  const handleFile = (e) => {
    setFileData(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (fileData) {
      const formData = new FormData();
      formData.append("file", fileData);

      try {
        const response = await fetch("/api/pictures", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("File uploaded successfully");
        } else {
          console.error("File upload failed");
        }
      } catch (error) {
        console.log("File uploading error: ", error);
      }
    }
  };

  return (
    <section className="flex gap-2 justify-center items-center flex-wrap">
      <input
        className="text-xs border rounded-sm w-full max-w-[250px]"
        type="file"
        onChange={handleFile}
      />
      <button
        className="border max-w-[200px] p-1 rounded text-xs bg-black text-white cursor-pointer"
        onClick={handleUpload}
        disabled={fileData ? false : true}
      >
        Upload File
      </button>
    </section>
  );
}
