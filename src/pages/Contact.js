import React, { useState, useContext } from 'react';
import WomenImg from "../img/contact/woman.png";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
import { CursorContext } from "../context/CursorContext";



const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_olb5bwb',
        'template_2rqzk1r',
        e.target,
        'cMb8eAsO-H57ltOKq'
      )
      .then(
        (result) => {
          setName('');
          setEmail('');
          setMessage('');
          alert('Email sent successfully!');
        },
        (error) => {
          console.error(error);
          alert('Failed to send email.');
        }
      );
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}

      className='section bg-white'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}

            className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'>
          </motion.div>
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>
            <form onSubmit={handleSubmit} className=' flex flex-col gap-y-4'>
              <div className='flex gap-x-10'>
                <input
                  className='outline-none borrder-b border-b-primary h-[60px] bg-transparent font-secondary
                   w-full pl-3 placeholder:text-[#757879]'
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />

                <input className='outline-none borrder-b border-b-primary h-[60px] bg-transparent font-secondary
                 w-full pl-3 placeholder:text-[#757879]'
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input className='outline-none borrder-b border-b-primary h-[60px] bg-transparent font-secondary
               w-full pl-3 placeholder:text-[#757879]'
                name="message"
                placeholder="Message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send It</button>
            </form>
          </div>
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transition: transition1, duration: 1.5 }}

            className='lg:flex-1'>
            <img src={WomenImg} alt="" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;