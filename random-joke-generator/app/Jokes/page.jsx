'use client'

import { useEffect, useState } from "react"

const Joke=()=>{
    const [joke,setJoke]=useState({})
    const [punch,setPunch]=useState(false)
    const Url="https://official-joke-api.appspot.com/random_joke"
    
    const FetchUrl=async()=>{
        const res=await fetch(Url);
        const data=await res.json();
        setJoke(data);
    }

    useEffect(()=>{
        FetchUrl()
    },[])

    return (
        <>
         <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full border-2 border-amber-200">
        <div className="text-center">
          <div className="text-6xl mb-4">☕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Random Jokes Generator
          </h2>

          <div className="space-y-4">
            <p className="text-lg text-gray-700 font-medium">
              {joke.setup}
              {/* {randomJokes.} */}
            </p>

            {punch ? (
              <button
                onClick={() => setPunch(false)}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md cursor-pointer hover:shadow-lg"
              >
                Reveal Punchline
              </button>
            ) : (
              <div className="animate-fade-in">
                <p className="text-xl text-amber-700 font-bold bg-amber-50 p-4 rounded-lg border-2 border-amber-200 ">
                  {joke.punchline} 😄
                </p>
                <button
                  onClick={() => setPunch(true)}
                  className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  Hide Punchline
                </button>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={FetchUrl}
              className="text-l text-amber-700 font-bold bg-amber-50 px-4 mt-3 rounded-lg border-2 border-amber-200 cursor-pointer hover:shadow-lg"
            >
              Next
            </button>
            <div className="mt-6 text-sm text-gray-500">Joke ID: {joke.id}</div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default Joke;