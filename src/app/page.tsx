import Video from "~/components/Video";

export default function Home() {
  return (
    <div className="relative bg-zinc-100 min-h-screen">
      <div className="p-10">
        <h3 className="text-2xl font-bold">รายการวิดีโอ</h3>
        <h4 className="text-2xl font-bold my-4">RLS</h4>
        <Video type="RLS" />
        <h4 className="text-2xl font-bold mt-10 my-4">URL</h4>
        <Video type="URL" />
      </div>
    </div>
  );
}
