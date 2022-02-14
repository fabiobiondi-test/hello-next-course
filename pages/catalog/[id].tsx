// catalog/[id].tsx
import { GetStaticPropsContext } from 'next';
import axios from 'axios';
import { Gadget } from '../../model/gadget';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';

export async function getStaticPaths() {
  try {
    const res = await axios.get<Gadget[]>(API)
    const paths = res.data.map((item) => ({ params: {id: item.id.toString() } }))
    return {
      paths,
      fallback: true
    }
  }
  catch(err) {
    return {
      notFound: true,
    }
  }
}


export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id

  try {
    const res = await axios.get<Gadget>(`${API}/${id}`);

    return {
      props: {
        data: res.data
      },
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      },
    }
  }

}

interface CatalogDetailsProps {
  data: Gadget;
}

const CatalogDetails: React.FC<CatalogDetailsProps> = ({ data }) => {
  return (
    <>
      <h1 className="title">{data?.title}</h1>
      <p>{data?.description}</p>
      <Image src={data?.image} alt={data?.title} width={300} height={300}/>

      <Link href="/catalog">
        <a className="text-pink-500 mt-3">Back</a>
      </Link>
    </>

  )
}

export default CatalogDetails;
