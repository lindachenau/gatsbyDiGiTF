import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Content from './content'
import { navigate } from 'gatsby'
import { isAdmin } from './app-user'
import axios from 'axios'

const Publishing = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [topic, setTopic] = useState('Watercolour')

  useEffect(() => {
    if (!isAdmin())
      navigate('/')
  }, [])

  const handlePublish = async () => {
    try {
      const url = process.env.GATSBY_FCM_SERVER
      const config = {
        method: 'post',
        headers: {"Content-Type": "application/json"},
        url: url,
        data: {
          title: title,
          body: body,
          action: 'send',
          topic: topic,
          token: ""
        }          
      }      
      const response = await axios(config)
      console.log(response)
      alert(`Your message is published to the ${topic} subscriptions.`)

    } catch(err) {
      console.log("Error occurred: ", err)
    }
  }

  return (
    <Content title='Publishing'>
      <FormControl component="fieldset">
        <RadioGroup 
          row
          aria-label="topic" 
          name="topic" 
          value={topic} 
          onChange={(event) => setTopic(event.target.value)}
        >
          <FormControlLabel value="Photography" control={<Radio />} label="Photography" />
          <FormControlLabel value="DigitalArt" control={<Radio />} label="Digital art" />
          <FormControlLabel value="Watercolour" control={<Radio />} label="Watercolour painting" />
        </RadioGroup>
      </FormControl>
      <TextField
        required
        margin="dense"
        label="title"
        type="text"
        fullWidth
        variant="outlined"
        defaultValue={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <TextField
        required
        margin="dense"
        label="body"
        type="text"
        multiline
        rows="5"
        fullWidth
        variant="outlined"
        paragraph
        defaultValue={body}
        onChange={(event) => setBody(event.target.value)}
      />                                  
      <Button 
        variant="contained" 
        onClick={handlePublish} 
        color="primary" 
        disabled={title === '' || body === ''}
      >
        Publish
      </Button>
    </Content>
  )
}

export default Publishing