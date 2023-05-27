const Header = () => {
    return /* html */`
            <div class="flex w-full bg-gray-700 text-white h-28 px-6 justify-between rounded-t-md relative">
                <div class="text-4xl border-none rounded-t-2xl flex items-center cursor-pointer ">
                    <img class="border-none rounded w-1/4 h-3/4 absolute top-4 left-4" src="../imgs/logo_fpt.png" alt="">
                </div>
                <div class="flex justify-between p-4 border-none rounded-b-2xl">
                    <ul class="flex items-center space-x-4 lg:text-xl sm:text-lg justify-center gap-8 placeholder-opacity-95 lg:visible md:visible invisible">
                        <li class="hover:text-red-400"><a href="/">Home</a></li>
                        <li class="hover:text-red-400"><a href="/about">About Me</a></li>
                        <li class="hover:text-red-400"><a href="/blog">Blog</a></li>
                        <li class="hover:text-red-400"><a href="/contact">Contact</a></li>
                    </ul>
                    <div class="flex justify-center m-auto items-center hover:bg-gray-800 hover:border-none hover:p-1 hover:shadow-gray-900 hover:shadow-lg hover:delay-150 ml-6 border rounded-[3px] p-1 cursor-pointer">
                    <ion-icon name="reorder-four-outline" class="w-6 h-6" id="menu-show"></ion-icon></div>    
                </div>
            </div>
            `
}

export default Header;