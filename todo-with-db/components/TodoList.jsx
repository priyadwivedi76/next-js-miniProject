import React from 'react'
import { Pencil } from 'lucide-react'
import { CircleX } from 'lucide-react'
import Link from 'next/link'
const TodoList = () => {
  return (
    <div className='flex h-fit w-full shadow-lg px-5 py-2 bg-yellow-100 rounded-lg flex-row justify-between items-start'>
      <div className='flex flex-col items-start justify-center'>
        <h1 className='text-xl font-bold text-red-700'>Next js Learning</h1>
        <h1 className='text-md font-medium text-red-500'>Todo Description</h1>
      </div>
      <div className='flex items-start justify-center'>
        <Link href={'/update'} className='px-5 py-2 text-green-700'>
          <Pencil />
        </Link>
        <Link href={'/update'} className='px-5 py-2 text-red-700'>
          <CircleX />
        </Link>
      </div>
    </div>
  )
}

export default TodoList