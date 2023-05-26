const ProductList = ({products}) => {
  return `
  ${products
        .map(product => {
            return /* html */`<div class="grid grid-cols-3 gap-6">
            <h3><a href="/product/${product.id}">${product.name}</a></h3>  
            <span>${product.price}</span>
            </div>`;
    })
    .join("")}
    `;
  
};

export default ProductList;