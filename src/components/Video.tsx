"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  type: "RLS" | "URL";
}
function Video({ type }: Props) {
  const router = useRouter();
  const route = type === "RLS" ? "/video/rls" : "video/url";
  return (
    <div className="flex flex-col md:flex-row gap-4 mt-8">
      <img
        onClick={() => router.push(route)}
        className="flex-1 w-full md:w-80 aspect-video rounded-lg shadow cursor-pointer"
        src="https://www.beartai.com/wp-content/uploads/2024/04/maxresdefault-2024-04-22T172434.735.jpg"
        alt="Video Banner"
      />

      <div className="space-y-1">
        <Link href="/video/1" className="text-xl font-bold">
          บุก ByteArk บริษัทไอทีไทย พัฒนา CDN และ Streaming มาตรฐานโลก!
        </Link>
        <p className="text-sm text-zinc-500">
          22 เม.ย. 2024 • การดู 15,829 ครั้ง
        </p>
        <p className="text-sm">
          อ.ศุภเดชบุก #ByteArk บริษัทเทคที่เก่งหาตัวจับยากในไทย
          ผู้อยู่เบื้องหลังโครงสร้างพื้นฐานเทคโนโลยีมากมายของไทย
          ผู้ให้บริการเทคโนโลยี CDN และ Video Streaming มาตรฐานระดับโลก!
          #BTbeartai #bt ติดตาม BT กดเลย!{" "}
        </p>
      </div>
    </div>
  );
}

export default Video;
