import ProductList from "@/components/shared/product/product-list";
// import sampleData from "@/db/sample-data";
import { getLetestProducts } from "@/lib/actions/product.action";
// export const metadata = {
//   title : "Home"

// }
//const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const  Homepage = async () => {
  const letestProducts = await getLetestProducts();
  //await delay(2000);
  return <>
    <ProductList data={letestProducts} title="Newest Arrivals" limit={4} />
  </>;
}
 
export default Homepage;