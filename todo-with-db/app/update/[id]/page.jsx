import React from 'react'
import Link from 'next/link';
import dataInfo from '@/config/todoData';
import updateTodo from './update.action';

const page = async({params}) => {
    const {id}=await params;
    console.log(id)
    const [[updateInfo]]=await dataInfo.execute(`SELECT * FROM todos WHERE id=${id}`)
    console.log(updateInfo)

  return (
    <div className='body flex flex-col justify-center items-center min-h-screen'>
        <h1 className="text-center text-3xl font-semibold">Update Todo</h1>
        <form className='flex flex-col justify-center items-center gap-7 mt-10' action={updateTodo}>

        <input type="hidden" name="id" value={id} />

        <input
          name='title'
          type='text'
          defaultValue={updateInfo.title}
          placeholder='Enter title'
          className=' h-fit w-[60vw] text-md shadow-lg px-5 py-4 bg-gray-100 rounded-[70]'
        />

        <textarea
          name='description'
          type='text'
          defaultValue={updateInfo.description}
          placeholder='Enter description'
          className=' h-[15vh] w-[60vw] text-md shadow-lg px-5 py-4 bg-gray-100 rounded-[20]'
        />

        <div className='w-[60vw] text-md shadow-lg px-5 py-4 bg-gray-100 rounded-[20] flex flex-col justify-start items-start gap-5'>
          <h1>Select Priority</h1>

          <div className='flex justify-center items-center gap-5'>
            {['high','medium','low'].map((level)=>{
              return <label key={level} className='flex gap-2 items-center'>
                  <input
                    type="radio"
                    name="priority"
                    value={level}
                    defaultChecked={updateInfo.priority === level}
                  />
                {level.toUpperCase()}
              </label>
            })}
          </div>
        </div>

        <div className='flex gap-5'>
          <input type='submit' className='button p-3 w-24 text-center text-white rounded-lg' name='submit'/>
          <Link href={'/'} className='button p-3 w-36 text-center text-white rounded-lg'>See Todos</Link>
          <button className='button p-3 w-36 text-center text-white rounded-lg'>Delete</button>
        </div>

      </form>
    </div>
  )
}

export default page