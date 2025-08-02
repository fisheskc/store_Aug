import ProductsContainer from '@/components/products/ProductsContainer';
async function ProductsPage({searchParams}:{ searchParams: Promise <{ layout?: string; search?: string }>;}) {
  
  const params = await searchParams
  // if it is not present, we have a default value
  const layout = params.layout ?? 'grid';
  const search = params.search ?? '';
  // In here we do want access the search params
  // We want to pass both searchParams layout & search as props
  console.log(searchParams)
  return (
    <>
    <ProductsContainer layout={layout} search={search} />
    </>
  )
}

export default ProductsPage