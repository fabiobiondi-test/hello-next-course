import axios from 'axios';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GetServerSidePropsContext } from 'next';
import { Gadget } from '../../model/gadget';

const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  try {
    const res = await axios.get<Gadget[]>(API);

    return {
      props: {
        data: res.data
      },
      revalidate: 120
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

interface CatalogIndexProps {
  data: Gadget[]
}

const CatalogIndex: React.FC<CatalogIndexProps> = ({data}) => {
  return (
    <>
      <div className="flex">
        {
          data?.map(item => {
            return (
              <Link href={`/catalog/${item.id}`} key={item.id}>
                <a>
                  <Image src={item.image} alt={item.title} width={300} height={300}/>
                </a>
              </Link>
            )
          })
        }
      </div>
    </>
  )
}

export default CatalogIndex;
