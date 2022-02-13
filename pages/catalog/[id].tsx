import { useRouter } from 'next/router';

function CatalogDetails() {
  const router = useRouter();
  console.log(router.query.id)
  return (
    <>
      <h1 className="title">Catalog Details</h1>
    </>
  )
}

export default CatalogDetails;
