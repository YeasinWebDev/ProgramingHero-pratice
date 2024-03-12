import React, { useState } from 'react'
import '../App.css'
function Country({ country, handleVisitedNum, keys }) {
  const { name } = country
  const [Visited, setVisited] = useState(false)

  const handleVisited = () => {
    setVisited(prev => !prev)
  }
  return (
    <div key={keys} className={` m-[15px] border-2 border-sky-700 p-[15px] rounded-xl ${Visited && "visited"}`} >
      <h3 className=' font-bold'>Name : {name?.common}</h3>
      <div className="img flex items-center gap-5 my-3">
        <h3> Conuntry : </h3>
        <img className='w-[80px] ' src={country.flags.png} alt={country.name} />
      </div>
      <p className='font-bold'>Population : {country.population}</p>
      <p>Area : {country.area}</p>
      <p>Code : {country.cca3}</p>


      <button className={`mt-2 ${Visited && "bg-transparent text-black border-2 border-black"}`} onClick={() => (handleVisited(),handleVisitedNum(name))}>{Visited ? "Visited" : "Visit"}</button>

      <p className='my-2 text-black font-bold'>{Visited && "I have visited this country"}</p>
    </div>
  )
}

export default Country