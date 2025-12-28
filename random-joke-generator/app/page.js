import Link from "next/link";

export default function Home() {

  return (
    <>
    <div>
      <Link href={'/Jokes'} className="font-bold text-3xl text-white bg-yellow-600 px-2 py-2">Generate Jokes</Link>
    </div>
    </>
  );
}
