"use client";
import Button from "@/components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-2 items-center">
      <p className="bg-green-500 text-white p-2 text-center">
        this is a great version!
      </p>
      <Link href={"/user"}>
        <Button>Click</Button>
      </Link>
    </div>
  );
}
