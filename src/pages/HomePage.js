import { posts, myblogs } from "../dateF.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const HomePage = () => {
    return /* html */ `
        ${Header()}
        <header class="text-white h-full w-full rounded-b-md" style="background-image: url(imgs/bg-banner.jpg); ">
                <h2 class="uppercase leading-tight pt-10 tracking-[3px] font-serif text-2xl text-center italic font-bold">LuyenKV</h2>
                <div class="px-3 py-6 grid grid-cols-2 justify-between">
                    <div class="grid w-full text-center">
                        ${posts.map(function (post) {
                            return /* html */`
                                <div class="text-center my-auto leading-loose tracking-[4px] italic font-bold text-4xl opacity-75">
                                    <h1>${post.title}</h1>
                                    <p>${post.content}</p>
                                </div>
                            `
                                }).join("")}
                    </div>
                    <div class="">
                        <img class="lg:w-ful mx-auto lg:h-full opacity-60 shadow-xl shadow-slate-300 rounded-full cursor-pointer sm:w-3/4 sm:h-3/4" src="../imgs/img_me.png" alt="">
                    </div>
                </div>
                <div class="my-6 text-center uppercase text-red-400 font-bold text-2xl">
                    <h1>My Skills in Coding</h1>
                </div>
                <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-none gap-8 mx-3 text-center">
                        
                        ${myblogs.map((myblog) => {
                            return `
                                <div class="border p-3 my-6 rounded-md h-[250px] grid items-center hover:cursor-pointer hover:bg-gray-700 hover:bg-opacity-30 hover:border-none">
                                    <div class="font-bold text-xl uppercase italic tracking-[3px]">${myblog.name}</div>
                                    <div>${myblog.content}</div>
                                </div>
                            `
                        }).join("")}
                </div>
        </header>
        ${Footer()}
    `;
}

export default HomePage;
