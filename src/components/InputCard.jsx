import React from "react";
import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'

export default function InputCard(props) {
  const inputAllForm = props.inputCard.title === '' || props.inputCard.body === '' || props.inputCard.category === ''

  const postAction = e => {
    e.preventDefault()

    props.setCardNum(props.cardNum + 1)
  }

  return (
    <Box sx={{ borderBottom: '1px solid lightgray', paddingBottom: '50px' }}>
      <h1>Post Action List</h1> カード枚数：{props.cardNum}
      <form>
        <TextField
          className='input-form'
          id='title'
          label='Title'
          variant='outlined'
          value={props.inputCard.title}
          onChange={e => props.setInputCard(
            {
              id: props.inputCard.id,
              title: e.target.value,
              body: props.inputCard.body,
              category: props.inputCard.category
            }
          )}
        />
        <TextField
          className='input-form'
          id='body'
          label='Body'
          multiline
          rows={4}
          variant='outlined'
          value={props.inputCard.body}
          onChange={e => props.setInputCard(
            {
              id: props.inputCard.id,
              title: props.inputCard.title,
              body: e.target.value,
              category: props.inputCard.category
            }
          )}
        />
        <TextField
          className='input-form'
          id='category'
          label='Category'
          variant='outlined'
          value={props.inputCard.category}
          onChange={e => props.setInputCard(
            {
              id: props.inputCard.id,
              title: props.inputCard.title,
              body: props.inputCard.body,
              category: e.target.value
            }
          )}
        />
        <Button className='input-form' variant='contained' onClick={postAction} disabled={inputAllForm}>post</Button>
      </form>
    </Box>
  )
}