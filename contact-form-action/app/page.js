
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="flex flex-col mt-30 justify-center gap-3 items-center">
      <h1 className="text-3xl text-white">Welcome to Home</h1>
      <div className="flex gap-5">
        <Link href={'/client'} className="px-2 rounded-lg py-2 bg-red-500 hover:bg-red-600">
          Form Action Using Client
        </Link>
      </div>
      
    </div>
    </>
  );
}
