import * as styles from './index.css'
import React from 'react'

const Ikkikki = () => {
  return (
    <div className={styles.container}>
      <div className={styles.glow} />
      <pre className={styles.preText}>
        {`         
   (        )
 (   •   •    )
(           )
  (       )
`}
      </pre>
    </div>
  )
}

export default Ikkikki
