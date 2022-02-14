import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';


const CatalogIndex = () => {
  return (
    <>
      <Head>
        <title>Front End Gadgets - Catalog</title>
        <meta name="description" content="Frontend gadget is a demo site to learn Next"/>
      </Head>

      <h1 className="title">Catalog</h1>

      <Link href="/catalog/123">
        <a className="text-pink-500 mt-3">Go to product</a>
      </Link>

    </>
  )
}

export default CatalogIndex;
