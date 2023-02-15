import React from 'react'
import {tenHighestPopulation} from '../data'

const Main = () => {

  return (
    <div>
      {tenHighestPopulation.map((item,index) => (
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
