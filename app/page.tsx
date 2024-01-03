'use client'
import Image from "next/image";
import TabbedNav from "./components/TabbedNav"
import instructorImg from "../public/images/instructor.jpeg"
import Carousel from "./components/Carousel"
import instagramIcon from "./images/instagram.png"
import youtubeIcon from "./images/youtube.png"
import twitterIcon from "./images/twitter.png"
import facebookIcon from "./images/facebook.png"
import tickIcon from "./images/tick.png"
import videoIcon from "./images/video.png"
import messageIcon from "./images/chatting.png"

export default function Home() {
  return (
    <main>
      <section id="about">
        <div style={{ background: 'url("/images/hero.jpg") no-repeat', backgroundSize: "cover" }} id="hero" className="text-white">
          <div className="w-full h-[450px] relative bg-gradient-to-r from-slate-900/75 to-transparent">
            <div className="innerDiv h-full flex items-end justify-start">
              <div className=" pb-12">
                <h3 className="text-sm font-medium">NITYANAND CHARAN DAS</h3>
                <h4 className="text-[30px] leading-[1.2] font-semibold mt-2 max-w-[420px] font-serif">Learn key life lessons from the Gita: Mind control and conflict resolution</h4>
              </div>
            </div>

            {/* <div className="absolute inset-0 bg-black/30 z-1" /> */}
          </div>
        </div>
        <TabbedNav />
        <div className="innerDiv">
          <div className="flex gap-x-4">
            <div className="w-[60%]">
              <div>
                <h4 className="font-serif text-[24px] font-semibold mt-7">About the course</h4>
                <p className="mt-5">Lorem ipsum text about managing relationships, communication, time management, and forgiveness. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores distinctio voluptatum sit alias, quos laborum porro! Ea, eveniet dolores nesciunt saepe ipsum porro consequatur?</p>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, dolor! A doloremque dicta ducimus repellat nulla quasi autem eum accusamus, nam nesciunt facilis aspernatur in eius. Nesciunt, ipsum. Inventore, ducimus saepe? Expedita ipsum iure error temporibus sapiente praesentium dolorum hic quod, perspiciatis, cum maiores nostrum beatae. Illum autem velit beatae.</p>
                <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis inventore aliquid odio odit provident nulla saepe similique blanditiis ratione aspernatur maxime earum, quam cum, nihil vero dolor, quia minima numquam!</p>
              </div>
              <div>
                <h5 className="font-serif text-[21px] font-semibold mt-8">What to expect from the course</h5>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <Image src={tickIcon} alt="Tick Icon" className="w-[14px] h-[14px] mr-6" />
                    Learn to manage your relationships
                  </li>
                  <li className="flex items-center">
                    <Image src={tickIcon} alt="Tick Icon" className="w-[14px] h-[14px] mr-6" />
                    Better communication</li>
                  <li className="flex items-center">
                    <Image src={tickIcon} alt="Tick Icon" className="w-[14px] h-[14px] mr-6" />
                    Time management</li>
                  <li className="flex items-center">
                    <Image src={tickIcon} alt="Tick Icon" className="w-[14px] h-[14px] mr-6" />
                    Forgiveness</li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-[21px] font-semibold mt-8">Key topics covered</h4>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti placeat ivident dolorum, ea iste vel vero nemo architecto temporibus deleniti perferendis est quaerat deserunt! Animi optio ratione illo quae. Quos excepturi sequi consectetur dolore quo eaque eligendi possimus et porro iure nostrum, quia reprehenderit temporibus, accusamus tenetur? Corporis, dolore. Reprehenderit, in neque!</p>
                <ul className="space-y-2 mt-4">
                  <li className="flex">
                    <Image src={tickIcon} alt="Tick Icon" className="w-[14px] h-[14px] mr-6" />
                    <p className="-mt-1"><span className="font-semibold">10 written and audio sessions</span> guiding you in decoding the language of numbers so that you can easily receive their insights and messages.</p>
                  </li>
                  <li className="flex">
                    <Image src={tickIcon} alt="Tick Icon" className="w-[14px] h-[14px] mr-6" />
                    <p className="-mt-1"><span className="font-semibold">Intuitive exercises and homework</span> walk you through the energies and values of numbers and number sequences so you can become your own authority.</p>
                  </li>
                  <li className="flex">
                    <Image src={tickIcon} alt="Tick Icon" className="w-[14px] h-[14px] mr-6" />
                    <p className="-mt-1"><span className="font-semibold">A Handy reference</span> to numerical meanings, so you can uncover your soul&#39;s gifts, challenges, lessons, and purpose – and receive spiritual guidance along your path.</p>
                  </li>
                  <li className="flex">
                    <Image src={tickIcon} alt="Tick Icon" className="w-[14px] h-[14px] mr-6" />
                    <p className="-mt-1"><span className="font-semibold">Expert techniques</span> for manifestation offer simple ways to use numbers to co-create with the universe.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="shadow-sm px-[22px] py-5 bg-[#f7f0ff] sticky z-20 top-20 -translate-y-20">
                <div>
                  <h6 className="text-[18px]">Course fees</h6>
                  <p className="text-[36px] font-semibold leading-none font-serif">&#8377;5,000</p>
                </div>
                <h6 className="text-[18px] mt-6">What&#39;s included:</h6>
                <ul className="text-[14px] mt-1 space-y-1">
                  <li className="flex items-center">
                    <Image src={videoIcon} alt="Tick Icon" className="w-[15px] h-[15px] mr-4" />
                    <span>5 on-demand videos</span>
                  </li>
                  <li className="flex items-center">
                    <Image src={videoIcon} alt="Tick Icon" className="w-[15px] h-[15px] mr-4" />
                    <span>2 livestream sessions</span>
                  </li>
                  <li className="flex items-center">
                    <Image src={messageIcon} alt="Tick Icon" className="w-[15px] h-[15px] mr-4" />
                    <span>Live Q&A sessions with Nityanand Charan Das</span>
                  </li>
                  <li className="flex items-center">
                    <Image src={messageIcon} alt="Tick Icon" className="w-[15px] h-[15px] mr-4" />
                    <span>An active Whatsapp community</span>
                  </li>
                </ul>
                <button className="text-center bg-purple-700 py-2 w-full mt-7 rounded-full text-white">Register today</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="instructor"
        className="py-20"
      >
        <div className="innerDiv ">
          <div>
            <h4 className="font-serif text-[24px] font-semibold">About the Instructor</h4>
            <div className="flex mt-5">
              <Image src={instructorImg} alt="Course Instructor" className="rounded-full w-[150px] h-[150px] mr-5" />
              <div>
                <div className="flex gap-x-4">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore voluptatem repellat blanditiis quas, libero nesciunt eum. Accusantium doloribus distinctio blanditiis, praesentium hic magnam error vitae possimus illo recusandae earum est voluptate amet nisi reprehenderit porro, ex fugit, neque aliquam fugiat?</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic inventore nemo accusamus quas, quibusdam ut perferendis dolores, velit quam quia molestiae dolorem ab quisquam ipsam sit, dolorum alias incidunt. Earum quaerat voluptas beatae ipsam debitis! Omnis, provident. Tenetur quos dicta aperiam veritatis possimus ullam expedita.</p>
                </div>
                <div className="socials flex items-center justify-between mt-5">
                  <a href="#" className="flex items-center gap-x-2 text-[15px]">
                    <Image src={facebookIcon} alt="Facebook Icon" className="w-[18px] h-[18px]" />
                    Facebook
                  </a>
                  <a href="#" className="flex items-center gap-x-2 text-[15px]">
                    <Image src={twitterIcon} alt="Twitter Icon" className="w-[18px] h-[18px]" />
                    Twitter
                  </a>
                  <a href="#" className="flex items-center gap-x-2 text-[15px]">
                    <Image src={youtubeIcon} alt="Youtube Icon" className="w-[18px] h-[18px]" />
                    Youtube
                  </a>
                  <a href="#" className="flex items-center gap-x-2 text-[15px]">
                    <Image src={instagramIcon} alt="Instagram Icon" className="w-[18px] h-[18px]" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="review"
        className="bg-[#f7f7f7] py-7"
      >
        <div className="innerDiv">
          <Carousel />
        </div>
      </section>
    </main>
  );
}
