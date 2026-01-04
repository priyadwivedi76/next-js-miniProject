import Image from "next/image";
import Link from "next/link";
import dataInfo from "@/config/todoData";
import TodoList from "@/components/TodoList";

export default async function Home() {
  const [FormData]=await dataInfo.execute('SELECT * FROM todos')
  console.log(FormData)
  return (
    <>
    <div className="body flex flex-col justify-center items-center min-h-screen">
      <div className="h-screen w-[90vw] px-5 mt-10 flex flex-col gap-3 items-center justify-center">
        <h1 className="text-center text-3xl font-semibold">Todo with Database</h1>
        <Link href={'/create'} className="button p-3 w-24 text-center text-white rounded-lg">Create</Link>
        <div className="flex flex-col w-full gap-6 mt-20">
          {FormData.map((items)=>{
            return <TodoList key={items.id}/>
          })}
        </div>
      </div>
    </div>
    </>
  );
}
