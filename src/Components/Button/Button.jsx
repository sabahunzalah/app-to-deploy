import React from 'react'
import styles from "./Button.module.css"

const Button = ({btnName}) => {
    console.log(btnName)
  return (
    <div className={styles.btnParent}>
  <button className={styles.btnStyling}>
    {btnName}
  </button>
  </div>
  )
}

export default Button
