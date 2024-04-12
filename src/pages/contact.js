import React, {useState} from 'react'
import Envelope from '../components/Envelope/Envelope'
import NavBar from '../components/navBar/navBar'
import {webConfig} from '../configs/webContentConfig'

export default function Contact() {
  const [animateEnvelope, setAnimateEnvelope] = useState(false);
  const [btnMsg,setBtnMsg] = useState('Send');
  const sent = sessionStorage.getItem('messageSent');

  const handleSendMessage = () => {
    if(sent !== 'true'){
      setAnimateEnvelope(true);
      sessionStorage.setItem('messageSent', 'true');
      setTimeout(() => {
        setBtnMsg('Letter Sent!');
      }, 4000);
    }
    else{
      setBtnMsg('Letter Already Sent!');
    }
  };


  return (
    <div id = "contactPage">
      <NavBar config = {webConfig.nav}/>
      <div className='envelopeWrapper'>
        <Envelope animate={animateEnvelope}/>
      </div>
      <button className="sendButton" onClick={handleSendMessage}>{btnMsg}</button>
    </div>
  )
}
