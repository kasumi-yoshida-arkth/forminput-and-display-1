import React, { useEffect, useState } from 'react'
import './index.css'
import InputCard from './components/InputCard'
import LineCardsUp from './components/LineCardsUp'

const App = () => {
  const outputCards = JSON.parse(sessionStorage.getItem('dataCards'))
  const initCardId = outputCards ? outputCards[outputCards.length - 1].id + 1 : 1;
  const [inputCard, setInputCard] = useState({ id: initCardId, title: '', body: '', category: '' })
  const [cards, setCards] = useState(outputCards ? outputCards : [])
  const [cardNum, setCardNum] = useState(outputCards ? outputCards.length : 0)
  const [deleteCardId, setDeleteCardId] = useState(0)

  useEffect(() => {
    const changeCard = async () => {
      if (cardNum > cards.length) {
        const newCards = await cards.length ? [...cards, inputCard] : [inputCard]
        setCards(newCards)
        sessionStorage.setItem('dataCards', JSON.stringify(newCards))
        setInputCard({ id: inputCard.id + 1, title: '', body: '', category: '' })
      } else if (cardNum < cards.length) {
        const newCards = cards.filter((card) => {
          return card.id !== deleteCardId;
        })
        setCards(newCards);
        sessionStorage.setItem('dataCards', JSON.stringify(newCards))
      }
    }
    changeCard()
  }, [cardNum])

  return (
    <>
      <InputCard
        cardNum={cardNum}
        setCardNum={setCardNum}
        inputCard={inputCard}
        setInputCard={setInputCard}
      />
      <LineCardsUp
        setDeleteCardId={setDeleteCardId}
        setCardNum={setCardNum}
        cardNum={cardNum}
        cards={cards}
      />
    </>
  )
}

export default App
