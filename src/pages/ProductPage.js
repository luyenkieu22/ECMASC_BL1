import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { products } from "../data";
import ProductList from "./ProductList";

const ProductPage = () => {
    return /* html */`
    ${Header()}
    <header class="text-white h-[550px]">
            ${Banner()}
            <div class="grid">
                ${ProductList({products})}
            </div>
    </header>
    ${Footer()}
    `;
};
export default ProductPage;
