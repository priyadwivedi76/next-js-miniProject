import Link from "next/link";


export default function Home() {
  return (
    <>
    <div className="text-center flex flex-col gap-5 pt-10 justify-around items-center">
      <h1 className="text-4xl font-semibold">Welcome to home page</h1>
      <div className="flex justify-center items-center gap-5">
        <Link href={'/static'} className="bg-yellow-600 rounded-lg px-2 py-1 text-xl font-bold">
          Static
        </Link>
        <Link href={'/dynamic'} className="bg-green-600 rounded-lg px-2 py-1 text-xl font-bold">
          Dynamic
        </Link>
      </div>
    </div>
    </>
  );
}
