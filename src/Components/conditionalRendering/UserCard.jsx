import React from 'react'
import userData from './userData'
import propTypes from "prop-types"

const UserCard = () => {
    const user = ["saba","sara","hunzalah","umair"] || []
  return (
   <>
  <ul>
    {
        userData.map((user,index) => {
          return <div key={index}>
          <h3>{user.id}</h3>
          <h3>{user.name}</h3>
          <h3>{user.age}</h3>
            
          </div> 
    })}
  </ul>
<select >
    {
        user.map((e,i)=>{
            return <option key={i}>{e}</option>
        })
    }
</select>
   </>
  )
};
UserCard.propTypes ={
    id:propTypes.number,
    name:propTypes.string,
    age:propTypes.number,
}

export default UserCard
