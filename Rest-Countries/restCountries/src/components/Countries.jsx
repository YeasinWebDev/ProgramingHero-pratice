import React, { useEffect, useState } from 'react'
import Country from './country'

function Countries() {
    const [countries, setContries] = useState([])
    const [counterList, setCounterList] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => setContries(data))
    }, [])


    const handleVisitedNum = (name) => {
        let namelist = name?.common
        setCounterList(prev => ([...prev, namelist]))
    }

    return (
        <div>
            <h1>Countries</h1>
            <div>
                <h5>Visited Countries :</h5>
                <ol className='ml-2 mt-2 flex gap-2'>
                    {
                        counterList?.map((country,i) =>
                            <li key={i}>
                                {country},
                            </li>
                        )
                    }
                </ol>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    countries.map((country) => (
                        <Country keys={country.name} country={country} handleVisitedNum={handleVisitedNum} />
                    ))
                }
            </div>
        </div>
    )
}

export default Countries