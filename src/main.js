import Navigo from "navigo";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const router = new Navigo("/");


const render = (content) => {
    const app = document.querySelector('#app');
    app.innerHTML = content();
}
router.on({
    "/": () => {
        render (HomePage);
    },
    "/about": () => {
        render (AboutPage);
    },
});

router.resolve();