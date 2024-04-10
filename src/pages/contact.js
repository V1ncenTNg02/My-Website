import React, {useState} from 'react'
import Envelope from '../components/Envelope/Envelope'
import NavBar from '../components/navBar/navBar'
import {webConfig} from '../configs/webContentConfig'

export default function Contact() {
  const [animateEnvelope, setAnimateEnvelope] = useState(false);

  const handleSendMessage = () => {
    setAnimateEnvelope(true);
  };


  return (
    <div id = "contactPage">
      <NavBar config = {webConfig.nav}/>
      <div className='envelopeWrapper'>
        <Envelope animate={animateEnvelope}/>
      </div>
      <button className="sendButton" onClick={handleSendMessage}>Send</button>
      
    </div>
  )
}
