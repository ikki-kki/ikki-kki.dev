import React from 'react'
import * as styles from './index.css'

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
