const Header = () => {
    return /* html */ `
            <div class="text-center py-10 bg-blue-500 text-4xl border-none rounded-t-2xl opacity-95">
                <img class="mx-auto border-none rounded" src="https://picsum.photos/300/80" alt="">
            </div>
            <div class="flex justify-between p-4 bg-green-300 border-none rounded-b-2xl opacity-80">
                <ul class="flex items-center space-x-4 text-xl justify-center gap-8">
                    <li class="hover:text-red-400"><a href="/">Home</a></li>
                    <li class="hover:text-red-400"><a href="/about">About</a></li>
                </ul>
            </div>`
}

export default Header;