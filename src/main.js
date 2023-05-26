import Navigo from "navigo";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import {render, router} from "./utilities";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";


const app = document.querySelector('#app');

router.on("/", () => render (HomePage, app));
router.on("/about", () => render (AboutPage, app));
router.on("/product", () => render (ProductPage, app));
router.on("/contact", () => render (Contact, app));
router.on("/product/:id", ({data}) => render (() => ProductDetail(data), app));

router.notFound(() => render(NotFound, app));

router.resolve();