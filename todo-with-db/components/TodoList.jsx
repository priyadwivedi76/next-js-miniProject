import React from 'react'
import Link from 'next/link'

const TodoList = (data) => {
  const { title, description, priority } = Object.fromEntries(data.entries());
  console.log(title, description, priority);

  return (
    <div className='flex h-fit w-full shadow-lg px-5 py-2 bg-yellow-100 rounded-lg flex-row justify-between items-start'>
      <div className='flex flex-col items-start justify-center'>
        <h1 className='text-xl font-bold text-red-700'>{title}</h1>
        <h1 className='text-md font-medium text-red-500'>{description}</h1>
        <h1 className='text-md font-medium text-red-500'>{priority}</h1>

        <div className='text-sm py-4 font-medium text-red-500 flex items-center justify-center gap-2'>
          <Link href={'/update'} className='text-green-700'>
            <h1 className='bg-green-500 px-3 py-2 font-semibold text-white rounded-lg'>Update</h1>g
          </Link>
          <button className='text-red-700'>
            <h1 className='bg-red-500 px-3 py-2 font-semibold text-white rounded-lg'>Delete</h1>
          </button>
        </div>
      </div>

      <div className='flex gap-3 items-start justify-center'>
        <h1 className='text-sm font-semibold opacity-[60%]'>{created_at}</h1>
        <h1 className='text-sm font-semibold opacity-[60%]'>{updated_at}</h1>
      </div>

    </div>
  )
}

export default TodoList