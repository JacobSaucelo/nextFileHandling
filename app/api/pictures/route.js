import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ message: "failed" });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = "./public/uploads/" + file.name;

  console.log("success file on ", path);
  await writeFile(path, buffer);

  return NextResponse.json({ message: "Success" });
}
