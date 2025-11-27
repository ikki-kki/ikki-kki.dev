import React from 'react'
import * as styles from './index.css'

const HelloBubble = () => {
  return (
    <div>
      <div />
      <div className={styles.content}>
        {`   
       ⎛                ⎞
   o (     `}
        <h1 className={styles.helloText}>Hello</h1>
        {`     )    
.°     ⎝                ⎠
  
  `}
      </div>
    </div>
  )
}

export default HelloBubble
