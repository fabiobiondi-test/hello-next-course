import React from 'react';

function Contacts() {
  const label = process.env.NEXT_PUBLIC_MY_CUSTOM_KEY;
  return (
    <>
      <h1 className="title">Contacts {label}</h1>
    </>
  )
}

export default Contacts;
