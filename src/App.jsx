import React, { useEffect, useState } from 'react'
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import './index.css'

const App = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('')
  const [cards, setCards] = useState([])
  const [cardNum, setCardNum] = useState(0)

  const inputAllForm = title === '' || body === '' || category === ''

  const postAction = e => {
    e.preventDefault()

    setCardNum(cardNum + 1)
  }

  useEffect(() => {
    const addCard = async () => {
      if (title !== '') {
        const newCard = await { cardTitle: title, cardBody: body, cardCategory: category }
        if (cards.length) {
          setCards([...cards, newCard]);
        } else {
          setCards([newCard]);
        }
        setTitle('')
        setBody('')
        setCategory('')
      }
    }
    addCard()
  }, [cardNum])

  return (
    <>
      <Box sx={{ borderBottom: '1px solid lightgray', paddingBottom: '50px' }}>
        <h1>Post Action List</h1>
        <form>
          <TextField className='input-form' id='title' label='Title' variant='outlined' value={title} onChange={e => setTitle(e.target.value)} />
          <TextField className='input-form' id='body' label='Body' multiline rows={4} variant='outlined' value={body} onChange={e => setBody(e.target.value)} />
          <TextField className='input-form' id='category' label='Category' variant='outlined' value={category} onChange={e => setCategory(e.target.value)} />
          <Button className='input-form' variant='contained' onClick={postAction} disabled={inputAllForm}>post</Button>
        </form>
      </Box>

      <Box>
        <h1>Action List</h1>
        {cards.map((card, i) => (
          <Card sx={{ maxWidth: 500, margin: 2 }} key={i}>
            <CardContent>
              <Typography sx={{ fontSize: 20, borderBottom: '1px solid lightgray' }}>
                {card.cardTitle}
              </Typography>
              <Typography sx={{ fontSize: 16, padding: 2 }}>
                {card.cardBody}
              </Typography>
              <Typography sx={{ fontSize: 12, padding: 2, color: '#0040a4' }}>
                #{card.cardCategory}
              </Typography>
            </CardContent>
            <CardActions>
              <Button color='warning' variant='outlined'>Delete</Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </>
  )
}

export default App
