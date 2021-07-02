import React, { useState, useEffect } from 'react'
import Content from './content'
import Card from './card'
import { MDBRow } from 'mdbreact'
import axios from "axios"
import { navigate } from 'gatsby'
import { isLoggedIn, getUser } from "./app-user"
import { updateSubscriptions } from "../utils/update-subscriptions"

const Subscription = () => {
  const user = getUser()
  const [subPhoto, setSubPhoto] = useState(user["custom:photography_sub"] === 'Y')
  const [subDA, setSubDA] = useState(user["custom:digitalart_sub"] === 'Y')
  const [subWatercolour, setSubWatercolour] = useState(user["custom:watercolour_sub"] === 'Y')

  useEffect(() => {
    if (!isLoggedIn())
      navigate('/')
  }, [])


  const topics = [
    {
      name: require("../images/photography.jpeg"),
      key: "1",
      alt: "First slide",
      title: "Photography",
      description: "You will be notified when I upload new photos or have some photography tips to share.",
      topic: "Photography",
      subscription: subPhoto
    },
    {
      name: require("../images/digitalart.jpeg"),
      key: "2",
      alt: "Second slide",
      title: "Digital art",
      description: "I have a passion to digitally create paintings from photos. You will be notified when I upload new digital art or have new digital art tips to share.",
      topic: "DigitalArt",
      subscription: subDA
    },
    {
      name: require("../images/watercolour.jpeg"),
      key: "3",
      alt: "Third slide",
      title: "Watercolour painting",
      description: "I'm a watercolour painting beginner. Thanks to the amazing artists sharing their painting demos on YouTube, I've steadily made progress and thoroughly enjoyed it in the past few months. I'll upload my work and share the artists I follow.",
      topic: "Watercolour",
      subscription: subWatercolour
    }
  ]  

  const handleSubscription = async (topic) => {
    let action
    let message
    if (topic === "Photography") {
      action = subPhoto ? "unsubscribe" : "subscribe" 
      message = `You have successfully ${subPhoto ? "unsubscribed from" : "subscribed to"} Photography!`
      setSubPhoto(!subPhoto)
    }
    else if (topic === "DigitalArt") {
      action = subDA ? "unsubscribe" : "subscribe"
      message = `You have successfully ${subDA ? "unsubscribed from" : "subscribed to"} Digital art!`
      setSubDA(!subDA)
    }
    else {
     action = subWatercolour ? "unsubscribe" : "subscribe"
     message = `You have successfully ${subWatercolour ? "unsubscribed from" : "subscribed to"} Watercolour painting!`
     setSubWatercolour(!subWatercolour)
    }

    try {
      const messaging = firebase.messaging()
      await messaging.requestPermission()
      console.log("Have permission")

      const token = await messaging.getToken()
      // console.log(token)

      const url = process.env.GATSBY_FCM_SERVER
      const config = {
        method: 'post',
        headers: {"Content-Type": "application/json"},
        url: url,
        data: {
          title: "",
          body: "",
          action: action,
          topic: topic,
          token: token
        }          
      }      
      const response = await axios(config)
      // console.log(response)
      updateSubscriptions(topic, action)
      alert(message)

    } catch(err) {
      console.log("Error occurred: ", err)
    }
  }

  return (
    <Content title='Subscriptions'>
      <MDBRow className="m-0" center>
        {topics.map((item) => 
          <Card 
            key={item.key}
            image={item.name}
            title={item.title}
            description={item.description}
            handleSubscription={() => handleSubscription(item.topic)}
            subscription={item.subscription}
          />
        )}
      </MDBRow>
    </Content>
  )
}

export default Subscription