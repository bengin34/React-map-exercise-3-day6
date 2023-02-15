import React from 'react'
import {tenHighestPopulation} from '../data'
import { Progress } from 'antd'

const Main = () => {

  return (
    <div className='container-sm'>
      {tenHighestPopulation.map((item,index) => (
        <div className='container' key={index}>
        <div className='d-flex justify-content-between' key={index}>
        <div className='float-sm-start'>
          <h4 style={{width:"100px"}} >{item.country}</h4>
        </div>
        <div style={{width:"30vw"}} ><Progress percent={item.rate} status="active" showInfo={false} /></div>
        <div ><p>{item.population}</p></div>
          
        </div>
        </div>
      )

       )}
    </div>
  )
}

export default Main
