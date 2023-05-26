import { products } from "../dateF";

const ProductDetail = ({ id }) => {
    const product = products.find((product) => product.id === +id);
    console.log("product", product);
    if (!product) return "Not found";
  return `
    <div>${product.name}</div>
  `;
};

export default ProductDetail;