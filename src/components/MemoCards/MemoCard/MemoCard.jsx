import React from 'react'
import styles from './MemoCard.module.scss' 
import cn from 'classnames'

const MemoCardComponent = ({ card, handleChoice, opens }) =>  {

    const handleClick = () => {
        handleChoice(card)
    }
    return (
        <div className={cn(styles.card, opens && styles.opens)} onClick={handleClick}>
            <div className={styles.card__cover}></div>
            <div className={cn(styles.card__colored, card.color && styles[card.color])}></div>
        </div>
    )
}
    
    

export const MemoCard = React.memo(MemoCardComponent)