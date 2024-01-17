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
        //  api check here
      } catch (error) {
        console.log("File uploading error: ", error);
      }
    }
  };

  return (
    <section>
      <h1>helllo world</h1>
      <input type="file" onChange={handleFile} />
      <button onClick={handleUpload} disabled={fileData ? false : true}>
        upload file
      </button>
    </section>
  );
}
