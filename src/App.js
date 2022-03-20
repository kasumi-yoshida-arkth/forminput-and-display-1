import React from 'react'
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import './index.css'

const App = () => {
  return (
    <>
      <Box sx={{ borderBottom: '1px solid lightgray', paddingBottom: '50px' }}>
        <h1>Post Action List</h1>
        <form>
          <TextField className='input-form' id='title' label='Title' variant='outlined' />
          <TextField className='input-form' id='body' label='Body' multiline rows={4} variant='outlined' />
          <TextField className='input-form' id='category' label='Category' variant='outlined' />
          <Button className='input-form' variant='contained'>post</Button>
        </form>
      </Box>

      <Box>
        <h1>Action List</h1>
        <Card sx={{ maxWidth: 500 }}>
          <CardContent>
            <Typography sx={{ fontSize: 20, borderBottom: '1px solid lightgray' }}>
              Title output
            </Typography>
            <Typography sx={{ fontSize: 16, padding: 2 }}>
              Body output
            </Typography>
            <Typography sx={{ fontSize: 12, padding: 2 }}>
              Category output
            </Typography>
          </CardContent>
          <CardActions>
            <Button color='warning' variant='outlined'>Delete</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}

export default App
