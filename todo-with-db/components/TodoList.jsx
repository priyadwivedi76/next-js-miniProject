import React from 'react'
import Link from 'next/link'

const TodoList = ({todo}) => {
   const {
    id,
    title,
    description,
    priority,
    created_at,
    updated_at
  } = todo;

  return (
    <div className='flex h-fit w-full shadow-lg px-5 py-2 bg-gray-100 rounded-lg flex-row justify-between items-start'>
      <div className='flex flex-col items-start justify-center'>
        <h1 className='text-2xl font-bold text-slate-900'>{title}</h1>
        <h1 className={`text-sm font-bold opacity-[60%] ${priority=='high' ? "text-red-700" : priority == 'medium' ? "text-orange-600" : "text-green-600"}`}>{priority.toUpperCase()}</h1>
        <h1 className='text-md font-medium text-slate-500'>{description}</h1>

        <div className='text-sm py-4 font-medium text-red-500 flex items-center justify-center gap-2'>
          <Link href={`/update/${id}`} className='text-green-700'>
            <h1 className='bg-green-500 px-3 py-2 font-semibold text-white rounded-lg text-xs'>Update</h1>
          </Link>
          <button className='text-red-700'>
            <h1 className='bg-red-500 px-3 py-2 font-semibold text-white rounded-lg text-xs'>Delete</h1>
          </button>
        </div>
      </div>

      <div className='flex gap-3 items-start justify-center'>
        <p className='text-sm opacity-[30%]'>Created: {new Date(created_at).toLocaleString()}</p>
        <p  className='text-sm opacity-[30%]'>Updated: {new Date(updated_at).toLocaleString()}</p>
      </div>

    </div>
  )
}

export default TodoList