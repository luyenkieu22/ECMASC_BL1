import Navigo from "navigo";

const router = new Navigo("/", {linksSelector: "a", hash: true});
const app = document.querySelector('#app');
const render = (content, container) => {
    
    container.innerHTML = content();
}



export { render, router };