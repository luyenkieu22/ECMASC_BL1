import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

const AboutPage = () => {
    return /* html */`
        ${Header()}
        <div class="container mx-auto">
            <p class="mt-4 uppercase tracking-[4px] text-2xl text-center font-serif text-white">About me</p> 
            <p class="mt-1 text-sm text-center font-serif text-white opacity-70">- My Introduction -</p> 
            <div class="w-4/5  flex my-12 mx-auto h-auto">
                <div class="w-2/5 mx-3 mt-6 h-[550px]">
                    <img class="w-full py-6 px-3 hover:p-0 hover:transition-all" src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.15752-9/346160633_1309604606300053_7743193451869910566_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7d_Hhw_20-MAX-M-wMs&_nc_ht=scontent.fhan4-3.fna&oh=03_AdQHCFooVBBsWhWG6obpQZ6C9BR5h3CAZB2rlOMcC_bI1Q&oe=6499B239">
                </div>
                <div class="w-3/5 ml-20 text-white">
                    <div class="flex mb-16 gap-20">
                        <div class="border rounded-md px-3 py-2 shadow-xl drop-shadow-2xl text-center shadow-gray-700 leading-7">
                            <ion-icon name="medal-outline" class="w-8 h-8 text-gray-300"></ion-icon>
                                <p>Experience</p>
                                <p class="text-xs opacity-80">2 Years</p>
                                <p class="text-xs opacity-80">Programming</p>
                        </div>
                        <div class="border rounded-md px-3 py-2 shadow-xl drop-shadow-2xl text-center shadow-gray-700 leading-7">
                            <ion-icon name="headset-outline" class="w-8 h-8 text-gray-300"></ion-icon>                                <p>Experience</p>
                            <p class="text-xs opacity-80">Anytime</p>
                            <p class="text-xs opacity-80">Support</p>
                        </div>
                    </div>
                    <div class="w-2/3 leading-8">
                        <p>As I strive to achieve my goal of becoming a full-stack developer, I have acquired valuable experience through the completion of various projects at a beginner level, and my accumulated years of programming and project work. Moreover, I possess a notable aptitude for self-directed learning and am able to apply myself to acquiring new skills within a constrained time frame.</p>
                    </div>
                </div>
            </div>
        </div>
        ${Footer()}
    `;
}

export default AboutPage;
