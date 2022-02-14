import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { Gadget } from '../../model/gadget';
import { GetServerSidePropsContext } from 'next';

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';

export const getServerSideProps = async(context: GetServerSidePropsContext) => {
  const id = context.params?.id;
  try {
    const { data } = await axios.get<Gadget>(`${API}/${id}`)
    return {
      props: {
        data
      }
    }
  } catch(err) {
    return {
      notFound: true
    }
  }
}

interface CatalogDetailsProps {
  data: Gadget
}

const CatalogDetails: React.VFC<CatalogDetailsProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Front End Gadgets - Catalog Product</title>
        <meta name="description" content="Frontend gadget is a demo site to learn Next"/>
      </Head>
      <h1 className="title">{data.title}</h1>
      <Image src={data.image} alt={data.title} width={300} height={300} />

      <Link href="/catalog">
        <a className="text-pink-500 mt-3">Back</a>
      </Link>
    </>

  )
}

export default CatalogDetails;
