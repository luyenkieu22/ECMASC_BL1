import Footer from '../components/Footer'
import Header from '../components/Header'

const Contact = () => {
  return /* html */`
    ${Header()}
    <div class="uppercase text-2xl italic mx-3 tracking-[4px] font-bold text-red-400 mt-4">Contact me</div>
    <div class="grid grid-rows-3 text-white outline-none gap-y-3 my-6 pointer-events-none opacity-80">
      <span class="border-none p-2 rounded-md w-1/5 bg-gray-600 shadow-md shadow-gray-700">Number phone: 0999999999</span>
      <span class="border-none p-2 rounded-md w-1/5 bg-gray-600 shadow-md shadow-gray-700">Email: luyenkvph44452@fpt.edu.vn</span>
      <span class="border-none p-2 rounded-md w-1/5 bg-gray-600 shadow-md shadow-gray-700">Address: Đồng trúc Thạch Thất Hà Nội</span>
    </div>
    <div class="flex justify-center">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.988130918811!2d105.57206457590989!3d20.993112889000805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345a66ce79d717%3A0x6579da08118423b0!2zxJDhu5NuZyBLaG8gLSDEkOG7k25nIFRyw7pjLCBUaOG6oWNoIFRo4bqldCwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1685069175501!5m2!1svi!2s" width="60%" height="450" style="border:0; border-radius: 8px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    ${Footer()}
`
    
  
}

export default Contact