import React from 'react'
// import data from '../data'

const Main = () => {
const data  = [
    { country: 'World', population: 7693165599 },
    { country: 'China', population: 1377422166 },
    { country: 'India', population: 1295210000 },
    { country: 'United States of America', population: 323947000 },
    { country: 'Indonesia', population: 258705000 },
    { country: 'Brazil', population: 206135893 },
    { country: 'Pakistan', population: 194125062 },
    { country: 'Nigeria', population: 186988000 },
    { country: 'Bangladesh', population: 161006790 },
    { country: 'Russian Federation', population: 146599183 },
    { country: 'Japan', population: 126960000 },
  ]
  return (
    <div>
      {data.map((item,index) => (
        <div className='container key={index}'>
        <div className='d-flex justify-content-between' key={index}>
        <div>
          <h2>{item.country}</h2>
        </div>
          <h5>{item.population}</h5>
        </div>
        </div>
      )

       )}
    </div>
  )
}

export default Main
