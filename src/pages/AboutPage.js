import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

const AboutPage = () => {
    return /* html */`
        ${Header()}
        <div class="text-red-400 uppercase h-[600px] container mx-auto">
            AboutPage
        </div>
        ${Footer()}
    `;
}

export default AboutPage;
