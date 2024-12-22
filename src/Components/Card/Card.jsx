import React from 'react'
import CardData from './CardData'

const Card = () => {
  return (
   CardData.map((e,i)=>{
    return <div key={i}>
        <img src={e.src} alt="" />
        <h2>{e.name}</h2>
        <h5>{e.desc}</h5>
    </div>
   })

  )
}

export default Card
