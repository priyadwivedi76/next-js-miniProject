import React from 'react'

const Create = () => {
  return (
    <div className='body flex flex-col justify-center items-center min-h-screen'>
       <h1 className="text-center text-3xl font-semibold">Create Todo</h1>
      <form className='flex flex-col justify-center items-center gap-7 mt-10'>
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

        <div className=' w-[60vw] text-md shadow-lg px-5 py-4 bg-gray-100 rounded-[30] flex flex-col justify-start items-start gap-5'>
          <h1>Select Priority</h1>
          <div className='flex justify-center items-center gap-5'>
            <div className='flex gap-2'>
               <input type="radio" id="high" name="high" value="high"/>
                <label for="high">High</label><br/>
            </div>
            <div className='flex gap-2'>
              <input type="radio" id="medium" name="medium" value="medium"/>
              <label for="medium">Medium</label><br/>
            </div>
            <div className='flex gap-2'>
              <input type="radio" id="low" name="low" value="low"/>
              <label for="low">Low</label>
            </div>
          </div>
        </div>
        
      </form>
    </div>
  )
}

export default Create