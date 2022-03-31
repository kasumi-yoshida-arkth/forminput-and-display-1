import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'

export default function LineCardsUp(props) {
  const deleteCard = (id, e) => {
    e.preventDefault()

    props.setDeleteCardId(id)
    props.setCardNum(props.cardNum - 1)
  }

  return (
    <Box>
      <h1>Action List</h1>
      {props.cards.map((card) => (
        <Card sx={{ maxWidth: 500, margin: 2 }} key={card.id}>
          <CardContent>
            <Typography sx={{ fontSize: 20, borderBottom: '1px solid lightgray' }}>
              {card.title}
            </Typography>
            <Typography sx={{ fontSize: 16, padding: 2 }}>
              {card.body}
            </Typography>
            <Typography sx={{ fontSize: 12, padding: 2, color: '#0040a4' }}>
              #{card.category}
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='warning' variant='outlined' onClick={(e) => deleteCard(card.id, e)}>Delete</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  )
}
