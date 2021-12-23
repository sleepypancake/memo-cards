import React from 'react'
import { MEMO_CARDS } from '../../constants/cards'
import { MemoCard } from './MemoCard/MemoCard'
import styles from './MemoCards.module.scss'


const MemoCardsComponent = (props) => {
    return (
        <div className={styles.wrapper}>
            {MEMO_CARDS.map(card => (
                <MemoCard key={card.id} color={card.color} />
            ))}
        </div>
    )
}

export const MemoCards = React.memo(MemoCardsComponent)