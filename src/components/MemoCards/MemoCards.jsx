import React, { useEffect, useState } from 'react'
import { MEMO_CARDS } from '../../constants/cards'
import { useShuffleArray } from '../../utils/hooks/useShuffleArray'
import { MemoCard } from './MemoCard/MemoCard'
import styles from './MemoCards.module.scss'


const MemoCardsComponent = (props) => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    const shuffledArr = useShuffleArray(MEMO_CARDS)

    useEffect(() => {
        setCards(shuffledArr)
    }, [shuffledArr])

    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }
    // console.log('choiceOne', choiceOne)
    // console.log('choiceTwo', choiceTwo)

    useEffect(() => {
        if (choiceOne && choiceTwo) {
            if (choiceOne.color === choiceTwo.color) {
                // setMatch(arr => {
                //     const newArr = [...arr]
                //     newArr.push([choiceOne.id, choiceTwo.id])
                //     resetChoices()
                //     return newArr
                // })
                console.log('those cards match')
                resetChoices()
            } else {
                console.log('those cards do not match')
                resetChoices()
            }
        }
    }, [choiceOne, choiceTwo])
    
    const resetChoices = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1)
    }
    return (
        <div className={styles.wrapper}>
            {cards.length && cards.map(card => (
                <MemoCard 
                    key={card.id}
                    card={card}
                    handleChoice={handleChoice}
                />
            ))}
        </div>
    )
}

export const MemoCards = React.memo(MemoCardsComponent)