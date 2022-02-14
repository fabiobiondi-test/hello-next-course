import type { NextPage } from 'next'
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import image from '/public/images/react.png';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Front End Gadgets</title>
        <meta name="description" content="Frontend gadget is a demo site to learn Next"/>
      </Head>
      <Image src={image}  alt="React logo"/>
      <h1 className="title">FrontEnd Gadgets</h1>
      <button className="transition-all duration-500	border border-pink-500 bg-white rounded-lg rounded-circle p-2 hover:bg-pink-50">VIEW CATALOG</button>
    </>
  )
}

export default Home
