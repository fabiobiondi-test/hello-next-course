import React from 'react';
import Link from 'next/link';

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';


const CatalogIndex = () => {
  return (
    <>
      <h1 className="title">Catalog</h1>

      <Link href="/catalog/123">
        <a className="text-pink-500 mt-3">Go to product</a>
      </Link>

    </>
  )
}

export default CatalogIndex;
