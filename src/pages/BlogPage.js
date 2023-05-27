import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogPage = () => {
  return /* html */`
    ${Header()}
    <div class="container mx-auto">
      <p class="mt-4 uppercase tracking-[4px] text-4xl text-center font-serif text-white">Blog</p> 
      <p class="uppercase mt-12 tracking-[4px] text-xl font-serif italic text-white">Featured Posts</p>
      <div class="flex mt-8">
          <div class="w-full flex justify-center gap-6 text-white">
            <div class="border-none rounded-xl w-1/4">
                <img class="w-full" src="https://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/b-3.png">
                <div class="p-3 bg-gray-400">
                  <p class="text-2xl mb-2">A life without the daily traffic jams</p>
                  <p class="text-sm italic">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                  <a href="#" class="text-cyan-300"><p>Read More</p></a> 
                </div>
            </div>
            <div class="border-none rounded-xl w-1/4">
                <img class="w-full" src="https://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/b-1.png">
                <div class="p-3 bg-gray-400">
                  <p class="text-2xl mb-2">A life without the daily traffic jams</p>
                  <p class="text-sm italic">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                  <a href="#" class="text-cyan-300"><p>Read More</p></a> 
                </div>
            </div>
            <div class="border-none rounded-xl w-1/4">
                <img class="w-full" src="https://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/b-2.png">
                <div class="p-3 bg-gray-400">
                  <p class="text-2xl mb-2">A life without the daily traffic jams</p>
                  <p class="text-sm italic">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                  <a href="#" class="text-cyan-300"><p>Read More</p></a> 
                </div>
            </div>
          </div>
      </div>
      <p class="uppercase text-center mt-40 tracking-[3px] text-xl font-serif italic text-white">Client Reviews</p>
      <div class="flex mt-8">
      <div class="w-full flex justify-center gap-6 text-white">
        <div class="border-none bg-gray-700 rounded-xl w-1/5 py-6">
          <img class="w-2/4 mx-auto p-1 bg-cyan-400 rounded-full" src="https://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/c-1.png">
          <div class="p-3">
            <p class="text-2xl mb-2">A life without the daily traffic jams</p>
            <p class="text-sm italic">Absolute wonderful ! I am completely blown away.The very best.I was amazed at the quality</p>
          </div>
        </div>
        <div class="border-none bg-gray-700 rounded-xl w-1/5 py-6">
          <img class="w-2/4 mx-auto p-1 bg-cyan-400 rounded-full" src="https://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/c-1.png">
          <div class="p-3">
            <p class="text-2xl mb-2">A life without the daily traffic jams</p>
            <p class="text-sm italic">Absolute wonderful ! I am completely blown away.The very best.I was amazed at the quality</p>
          </div>
        </div>
        <div class="border-none bg-gray-700 rounded-xl w-1/5 py-6">
          <img class="w-2/4 mx-auto p-1 bg-cyan-400 rounded-full" src="https://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/c-1.png">
          <div class="p-3">
            <p class="text-2xl mb-2">A life without the daily traffic jams</p>
            <p class="text-sm italic">Absolute wonderful ! I am completely blown away.The very best.I was amazed at the quality</p>
          </div>
        </div>
      </div>
  </div>

    </div>

    ${Footer()}
    `

}

export default BlogPage;