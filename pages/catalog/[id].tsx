import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';

const CatalogDetails = () => {
  return (
    <>
      <Head>
        <title>Front End Gadgets - Catalog Product</title>
        <meta name="description" content="Frontend gadget is a demo site to learn Next"/>
      </Head>
      <h1 className="title">Catalog Details</h1>

      <Link href="/catalog">
        <a className="text-pink-500 mt-3">Back</a>
      </Link>
    </>

  )
}

export default CatalogDetails;
