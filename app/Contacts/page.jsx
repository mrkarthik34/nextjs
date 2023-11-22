"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Grid } from '@mui/material'
import Link from 'next/link'
import SocialMedia from '@/public/src/components/SocialMedia'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    const formData = new FormData(formRef.current);
    let isValid = true;

    formData.forEach((value, key) => {
      if (!value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      toast.error('Please fill in all fields.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }

    emailjs.sendForm('service_yu4xhnf', 'template_e9avlsm', formRef.current, 'ELzJ0uzqQ2x5fXMh4')
      .then((result) => {
        console.log(result.text);
        toast.success('Email sent successfully!', {
          position: toast.POSITION.TOP_RIGHT,
        });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error.text);
        toast.error('Error sending email.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  return (
    <div className='bg-black'>
      <div className='bg-black w-5/6 mx-auto'>
        <p className='text-white lg:text-6xl md:text-2xl sm:text-2xl text-center pt-16'>Let's Start Something</p>
        <p className='text-white text-center text-2xl pt-8'>Home /<span className='text-green-400'> Let's Start Something</span> </p>
        <Grid className='pt-4' container spacing={2}>
          <Grid item xl={8} lg={8} md={8} sm={12}>
            <div className='lg:p-16 mt-8 rounded bg-gray-900  shadow-md'>
              {/* <form ref={formRef}>
                <div className='p-2'>
                  <p className='text-white text-2xl'><strong>Leave A Reply</strong></p>
                  <p className='text-white'>Your email address will not be published. Required fields are marked *</p>
                </div>
                <div className="mb-4 p-2">
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="Your Name"
                    className="text-white w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500 focus:text-white focus:bg-gray-700"
                    required
                  />
                </div>


                <div className="mb-4 p-2">
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="text-white w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500 focus:text-white focus:bg-gray-700"
                    required
                  />
                </div>


                <div className="mb-6 p-2">
                  <textarea
                    id="comments"
                    name="message"
                    placeholder="Your Comments"
                    rows="4"
                    className="text-white w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500 focus:text-white focus:bg-gray-700"
                    required
                  />
                </div>


                <button
                  type="submit"
                  onClick={sendEmail}
                  className="bg-green-400 text-black py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
                >
                  Submit Comment
                  <ToastContainer />
                </button>
              </form> */}

              <form ref={formRef}>
                <div className='p-2'>
                  <p className='text-white text-2xl'><strong>Leave A Reply</strong></p>
                  <p className='text-white'>Your email address will not be published. Required fields are marked *</p>
                </div>
                <div className="mb-4 p-2">
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="Your Name"
                    className="text-white w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500 focus:text-white focus:bg-gray-700"
                    required
                  />
                </div>

                <div className="mb-4 p-2">
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="Your Email"
                    className="text-white w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500 focus:text-white focus:bg-gray-700"
                    required
                  />
                </div>

                <div className="mb-6 p-2">
                  <textarea
                    id="comments"
                    name="message"
                    placeholder="Your Comments"
                    rows="4"
                    className="text-white w-full p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500 focus:text-white focus:bg-gray-700"
                    required
                  />
                </div>

                <button
                  type="submit"
                  onClick={sendEmail}
                  className="bg-green-400 text-black py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline-indigo active:bg-indigo-800"
                >
                  Submit Comment
                  <ToastContainer />
                </button>
              </form>

            </div>
          </Grid>
          <Grid item xl={4} lg={4} md={4} sm={12}>
            <div className='xl:p-16 lg:p-4 mt-8 rounded bg-gray-900  shadow-md'>
              <p className='text-white text-xl pb-1'><strong>Feel Free To Contact Me Anytime</strong></p>
              <div className='mb-4 p-2 bg-gray-800 border border-gray-700 rounded'>
                <p className='text-white w-full p-2'>Email</p>
                <Link href="mailto:Davidmatias333@Gmail.Com" className="text-white p-2">
                  Davidmatias333@Gmail.Com
                </Link>
              </div>
              <div className='mb-4 p-2 bg-gray-800 border border-gray-700 rounded'>
                <p className='text-white w-full p-2'>Phone</p>
                <Link href="tel:6374182846" className="text-white p-2">
                  + 91 6374182846
                </Link>
              </div>
              <div className='mb-4 p-2 bg-gray-800 border border-gray-700 rounded'>
                <p className='text-white w-full p-2'>Address</p>
                <Link href="mailto:Davidmatias333@Gmail.Com" className="text-white p-2">
                  Victoria Street London
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="pt-8" >
        <SocialMedia />
      </div>
    </div>
  )
}

export default page