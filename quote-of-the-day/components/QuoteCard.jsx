import React from 'react'

const QuoteCard = async() => {

const res=await fetch(`https://api.api-ninjas.com/v2/quoteoftheday`,{
  headers:{
    'X-API-Key':process.env.API_KEY
  }
})
const [data]=await res.json();

  return (
    <div className='bg-yellow-100 w-96 h-48 rounded-lg border-2 border-red-200 shadow-lg'>
        <h1 className='text-red-800 text-2xl font-semibold text-center mt-4'>{data.quote}</h1>
        <h3 className='text-red-800 text-md font-medium text-right m-3 hover:underline transition ease-in-ease-out'>-{data.author}</h3>
        <div className='flex gap-1 text-sm mx-3 mt-10 opacity-[70%] hover:opacity-[100%] transition ease-in-ease-out'>
            <h1 className='text-red-500 text-bold'>Category:</h1>
            {data.categories.join(',')}
        </div>
    </div>
  )
}

export default QuoteCard