import React from 'react';
import Link from 'next/link';

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';

const CatalogDetails = () => {
  return (
    <>
      <h1 className="title">Catalog Details</h1>

      <Link href="/catalog">
        <a className="text-pink-500 mt-3">Back</a>
      </Link>
    </>

  )
}

export default CatalogDetails;
