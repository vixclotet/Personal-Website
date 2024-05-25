import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Linkedin } from "lucide-react";


// Navigation Links
const navigation = [
  { name: "Contact Me", href: "/contact" },
  { name: "Photography", href: "/photos" },
];

// Actual Website Starts
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-tl from-cyan-200 to-cyan-100">
      <nav className="my-16 animate-fade-in max-w-4xl mx-auto w-full px-4">
        <ul className="flex items-center justify-center gap-4">
          <li>
            <Link
              href={navigation[0].href}
              className="text-xl duration-500 text-neutral-700 hover:text-zinc-300 font-mono flex flex-col items-center"
            >
              {navigation[0].name}
            </Link>
          </li>
          <li>
            <img src="favicon.png" alt="Center icon" className="w-24 h-24 mx-16" />
          </li>
          <li>
            <Link
              href={navigation[1].href}
              className="text-xl duration-500 text-neutral-700 hover:text-zinc-300 font-mono flex flex-col items-center"
            >
              {navigation[1].name}
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-sky-900 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Victoria Clotet
      </h1>

      {/* Basic Introduction Section */}
      <div className="hidden w-screen space-y-6 h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center space-y-6 animate-fade-in max-w-4xl mx-auto w-full px-4">
        <h2 className="text-xl text-neutral-900 font-mono">
          Hi! I'm a 22 year old tech entrepreneur who loves to learn about emerging technologies and build cool things with smart and ambitious people.
        </h2>
        <div className="flex flex-col items-center">
          <img src="SFPic.jpg" alt="SF Pic" className="w-60 h-80 border-4 border-neutral-700" />
          <h3 className="font-mono">I loooove SF 🌉</h3>
        </div>
      </div>

      {/* LinkedIn Button and Link */}
      <div className="my-16 text-center animate-fade-in max-w-4xl mx-auto w-full px-4 space-y-4">
        <div className="inline-block bg-white rounded-full px-6 py-3 shadow-lg">
          <h2 className="text-3xl text-neutral-900 font-mono font-bold hover:text-zinc-500">
            <a href="https://www.linkedin.com/in/victoria-clotet/" className="flex items-center justify-center">
              My LinkedIn <span className="ml-2"><Linkedin /></span>
            </a>
          </h2>
        </div>
      </div>

      {/* Background Section */}
      <div className="my-16 text-center animate-fade-in max-w-4xl mx-auto w-full px-4 space-y-6">
        <h2 className="text-3xl text-neutral-900 font-mono font-bold">
          Background
        </h2>
        <h3 className="text-lg text-neutral-900 font-mono">
          I'm a recent UVA graduate who double majored in Computer Science and Commerce. I like to build cool things for people and work with other ambitious developers and engineers.
          I like to travel around the EU, USA, and LATAM and learn about the different technologies that lead in each continent. One of my hobbies is photography. I like to take pictures of all of the places I travel to.
          I have a strong interest on the intersection between AI, Fintech, Content Creation, and SaaS business models. <span className="font-bold">If you are interested and/or passionate about one of these areas, do not be scared to reach out to me!</span>
        </h3>
        <div className="flex flex-col items-center">
          <img src="travelMap.png" alt="Travel Map" className="w-120 h-80 border-4 border-neutral-700" />
          <h3 className="font-mono"></h3>
        </div>
      </div>

      {/* Technical Contributions/Projects Section */}
      <div className="my-16 text-center animate-fade-in max-w-4xl mx-auto w-full px-4 space-y-4">
        <h2 className="text-3xl text-neutral-900 font-mono font-bold">
          Technical Contributions/Projects
        </h2>
        <div className="text-lg text-neutral-900 hover:text-zinc-500 font-mono font-bold">
          <h3><a href="https://posquotes.com/">PosQuotes</a></h3>
        </div>
        <div className="text-lg text-neutral-900 hover:text-zinc-500 font-mono font-bold">
          <h3><a href="https://x.com/ThePixelFan">AI Pixel Artist Bot</a></h3>
        </div>
        <div className="text-lg text-neutral-900 hover:text-zinc-500 font-mono font-bold">
          <h3><a href="https://github.com/vix4723">Go and Have Fun visiting my Github</a></h3>
        </div>
        <div className="text-lg text-neutral-900 hover:text-zinc-500 font-mono font-bold">
          <h3>More Coming Soon...</h3>
        </div>
      </div>

      {/* Writing + Thoughts*/}
      <div className="my-16 text-center animate-fade-in max-w-4xl mx-auto w-full px-4 space-y-4">
        <div className="inline-block bg-white rounded-full px-6 py-3 shadow-lg">
          <h2 className="text-3xl text-neutral-900 font-mono font-bold hover:text-zinc-500">
            <a href="https://x.com/vixclotet">Check my tweets!!</a>
          </h2>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="my-16 text-center animate-fade-in space-y-6 max-w-4xl mx-auto w-full px-4">
        <h2 className="text-3xl text-neutral-900 font-mono font-bold underline">
          Featured Articles
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="text-lg text-neutral-900 hover:text-zinc-500 font-mono font-bold">
            <h3><a href="https://www.linkedin.com/posts/yueyao1008_ghc-ugcPost-7114372736348553216-86e6?utm_source=share&utm_medium=member_desktop">Grace Hopper Conference 2023 Small Story</a></h3>
          </div>
          <div className="text-lg text-neutral-900 hover:text-zinc-500 font-mono font-bold">
            <h3><a href="https://engineering.virginia.edu/department/computer-science/blogs/cs-department-end-year-award-recipients-2022-2023">2022-2023 UVA CS Department End of Year Awards</a></h3>
          </div>
          <div className="text-lg text-neutral-900 hover:text-zinc-500 font-mono font-bold">
            <h3><a href="https://uvaapplication.blogspot.com/2023/03/student-takeover-victoria-vix-clotet.html">UVA Undergraduate Admissions Instagram Takeover 2023</a></h3>
          </div>
          <div className="text-lg text-neutral-900 hover:text-zinc-500 font-mono font-bold">
            <h3><a href="https://engineering.virginia.edu/department/computer-science/blogs/2021-2022-cs-department-end-year-awards">2021-2022 UVA CS Department End of Year Awards</a></h3>
          </div>
          <div className="text-lg text-neutral-900 hover:text-zinc-500 font-mono font-bold">
            <h3><a href="https://www.cavalierdaily.com/article/2023/03/back-on-grounds-hoohacks-2023-is-not-just-a-hackathon">HooHacks Hackathon 2023</a></h3>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 mb-4 text-center">
        <p className="text-neutral-700 font-mono">© 2024 Victoria Clotet</p>
      </footer>
    </div>
  );
}
