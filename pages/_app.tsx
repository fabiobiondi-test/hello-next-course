import '../styles/globals.css'

import type { AppProps } from 'next/app'
import React from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (<div>
    <NavBar />
    <div className="page">
      <Component {...pageProps} />
    </div>
    <Footer />

  </div>)
}

export default MyApp
