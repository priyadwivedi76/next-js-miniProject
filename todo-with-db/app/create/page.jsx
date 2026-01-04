import React from 'react'
import todoInfo from './todo.action'

const Create = () => {
  return (
    <div className='body flex flex-col justify-center items-center min-h-screen'>
       <h1 className="text-center text-3xl font-semibold">Create Todo</h1>
      <form className='flex flex-col justify-center items-center gap-7 mt-10' action={todoInfo}>
        <input
        name='title'
        type='text'
        placeholder='Enter title'
        className=' h-fit w-[60vw] text-md shadow-lg px-5 py-4 bg-gray-100 rounded-[70]'
        />

        <textarea
        name='description'
        type='text'
        placeholder='Enter description'
        className=' h-[15vh] w-[60vw] text-md shadow-lg px-5 py-4 bg-gray-100 rounded-[20]'
        />

        <div className=' w-[60vw] text-md shadow-lg px-5 py-4 bg-gray-100 rounded-[20] flex flex-col justify-start items-start gap-5'>
          <h1>Select Priority</h1>
          <div className='flex justify-center items-center gap-5'>
            <div className='flex gap-2'>
               <input type="radio" id="high" name="priority" value="high"/>
                <label htmlFor="high">High</label>
            </div>
            <div className='flex gap-2'>
              <input type="radio" id="medium" name="priority" value="medium"/>
              <label htmlFor="medium">Medium</label>
            </div>
            <div className='flex gap-2'>
              <input type="radio" id="low" name="priority" value="low"/>
              <label htmlFor="low">Low</label>
            </div>
          </div>
        </div>

        <input type='submit' className='button p-3 w-24 text-center text-white rounded-lg' name='submit'/>

      </form>
    </div>
  )
}

export default Create