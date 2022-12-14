import React from 'react'
import styles from './index.module.css'

export default function () {
  return (
    <div className={styles.container}>
        <div className={styles.lds_ring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}
