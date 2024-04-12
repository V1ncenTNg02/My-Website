import React, { useState, useEffect } from 'react'
import './Envelope.css'
import emailjs from 'emailjs-com'
import { emailConfig } from '../../configs/emailConfig';


export default function Envelope({animate}) {
  const [isAnimated, setIsAnimated] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [letterTitle, setLetterTitle] = useState('');
  const [letterContent, setLetterContent] = useState(''); 

  useEffect(() => {
    const sendEmail = () => {
      console.log(senderEmail, letterContent, letterTitle);
  
      emailjs.send(
        emailConfig.serviceID,
        emailConfig.templateID,
        {
          to:'wuyinghong0323@gmail.com',
          senderName:senderName,
          subject:letterTitle,
          message:letterContent,
          senderEmail:senderEmail
        },
        emailConfig.userID
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
    }

    const handleFormSubmit = () => {
      sendEmail();
    };

    if (animate) {
      setIsAnimated(true);
      handleFormSubmit();
    }
  }, [animate, letterContent, letterTitle, senderEmail, senderName]);

  return (
    <div className={`envelopeContainer ${isAnimated && animate ? 'animate' : ''}`}>
      <div className='lid one'></div>
      <div className='lid two'></div>
      <div className='envelope'></div>
      <form className='letter' onSubmit={(e) => e.preventDefault()}>
        <input className='name' value = {senderName} onChange = {(e) => {setSenderName(e.target.value)}} placeholder='Name:'></input>
        <input className='letterTitle' value ={letterTitle} onChange = {(e) => {setLetterTitle(e.target.value)}} placeholder='Subject:'></input>
        <textarea className='message' value={letterContent} onChange = {(e) => {setLetterContent(e.target.value)}} rows="7" placeholder='Say something'></textarea>
        <input className='email' value={senderEmail} onChange = {(e) => {setSenderEmail(e.target.value)}} placeholder='Email:'></input>
      </form>
    </div>
  )
}
