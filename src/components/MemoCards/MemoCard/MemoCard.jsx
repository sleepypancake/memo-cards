import React from 'react'
import styles from './MemoCard.module.scss' 
import cn from 'classnames'

const MemoCardComponent = ({ color }) =>  {
    return (
        <div className={styles.card}>
            <div className={styles.card__cover}></div>
            <div className={cn(styles.card__colored, color && styles[color])}></div>
        </div>
    )
}
    
    

export const MemoCard = React.memo(MemoCardComponent)