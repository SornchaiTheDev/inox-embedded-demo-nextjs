"use client";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function BackButton() {
  const router = useRouter();
  return (
    <button className="flex w-fit gap-4 mb-4" onClick={() => router.back()}>
      <MoveLeft />
      ย้อนกลับ
    </button>
  );
}

export default BackButton;
