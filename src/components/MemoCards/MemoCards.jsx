import React, { useEffect, useState } from 'react'
import { MEMO_CARDS } from '../../constants/cards'
import { MemoCard } from './MemoCard/MemoCard'
import styles from './MemoCards.module.scss'


const MemoCardsComponent = (props) => {
    const [cards, setCards] = useState([])
    const [match, setMatch] = useState([])
    const [choiceOne, setChoiceOne] = useState({})
    const [choiceTwo, setChoiceTwo] = useState({})

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array
      }
    
    useEffect(() => {
        setCards(shuffle(MEMO_CARDS))
    }, [])

    const handleChoice = (card) => {
        choiceOne.id ? setChoiceTwo(card) : setChoiceOne(card)
    }
    // console.log('choiceOne', choiceOne)
    // console.log('choiceTwo', choiceTwo)

    const matchCards = () => {
        if (choiceOne.color === choiceTwo.color) {
            setMatch(arr => {
                const newArr = [...arr]
                newArr.push([choiceOne.id, choiceTwo.id])
                resetChoices()
                return newArr
            })
        }
    }


    choiceTwo.id && matchCards()
    console.log(match)
    const resetChoices = () => {
        setChoiceOne({})
        setChoiceTwo({})
    }
    return (
        <div className={styles.wrapper}>
            {cards.length && cards.map(card => (
                <MemoCard 
                    key={card.id}
                    card={card}
                    handleChoice={handleChoice}
                    opens={card.id === choiceOne.id || card.id === choiceTwo.id} 
                />
            ))}
        </div>
    )
}

export const MemoCards = React.memo(MemoCardsComponent)