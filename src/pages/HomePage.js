import { posts } from "../dateF.js";
import Banner from "../components/Banner.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const HomePage = () => {
    return /* html */ `
        ${Header()}
        <header class="text-white h-[550px]">
                
                ${Banner()}

                <div class="">
                    <h2>Bài viết</h2>
                    <div class="grid grid-cols-3 gap-6">
                        ${posts.map(function (post) {
                            return /* html */`
                                <div class="">
                                    <h1>${post.title}</h1>
                                    <p>${post.content}</p>
                                </div>
                            `
                        }).join("")}
                    </div>
                </div>
            </div>
        </header>
        ${Footer()}
    `;
}

export default HomePage;
