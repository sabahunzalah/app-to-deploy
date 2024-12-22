import React from 'react'
import styles from "./Student.module.css"

const Student = ({stdName = "Guest" ,stdAge = 0 , isStudent= false}) => {
  return (
    <div className={styles.stdDiv}>
      <h1>Student Name : {stdName}</h1>
      <h3>Student Age : {stdAge}</h3>
      <h5>Student Status :{isStudent ? "True" :"False"}</h5>
    </div>
  )
}

export default Student
