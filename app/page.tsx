import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Linkedin } from "lucide-react";
import { Analytics } from "@vercel/analytics/react"

// Navigation Links
const navigation = [
  { name: "Contact Me", href: "/contact" },
  { name: "Photos", href: "/photos" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/victoria-clotet/" },
  { name: "X/Twitter", href: "https://x.com/vixclotet" },
];

// Actual Website Starts
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-r from-cyan-100 via-cyan-200 to-cyan-100">
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-4xl mx-auto w-full px-4 py-2 flex items-center justify-between backdrop-blur-sm bg-white/30 rounded-full">
          <ul className="flex items-center gap-4">
            {navigation.map((item, index) => (
              <li key={index} className="w-full md:w-auto text-center">
                <Link
                  href={item.href}
                  className="block py-2 px-4 text-xl duration-500 text-neutral-700 hover:text-zinc-300 font-mono"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-full md:w-auto text-center">
            <img src="favicon.png" alt="Center icon" className="w-16 h-16 mx-auto md:mx-16" />
          </div>
        </div>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-sky-900 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text mt-24">
        Victoria Clotet
      </h1>

      {/* Basic Introduction Section */}
      <div className="hidden w-screen space-y-6 h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-8 grid grid-cols-1 md:grid-cols-5 gap-4 animate-fade-in max-w-4xl w-full mx-auto px-4">
        <div className="md:col-span-3 flex justify-center">
          <div className="text-center w-full space-y-4">
            <h2 className="text-xl text-neutral-900 font-mono">
              Hi! I'm a 22 year old tech entrepreneur who loves to learn about emerging technologies and build cool things with smart and ambitious people. Right now, I am currently building a marketing SaaS solution for Entrepreneurs 🛠️. I like to explore new cities 🌇 and I have an obsession with Bubble Tea 🧋
            </h2>
            <h2 className="text-xl text-neutral-900 font-mono">
              Right now, I am currently building a marketing SaaS solution for Entrepreneurs 🛠️. I like to explore new cities 🌇 and I have an obsession with Bubble Tea 🧋
            </h2>
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col items-center">
          <img src="SFPic.jpg" alt="SF Pic" className="w-60 h-80 border-4 border-neutral-700" />
          <h3 className="font-mono">I loooove SF 🌉</h3>
        </div>
      </div>

      {/* Background Section */}
      <div className="my-8 text-center animate-fade-in max-w-4xl mx-auto w-full px-4 space-y-6">
        <h2 className="text-3xl text-neutral-900 font-mono font-bold">
          Background
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center">
            <h3 className="text-lg text-neutral-900 font-mono">
              I'm a recent UVA graduate who double majored in Computer Science and Commerce. I like to build cool things for people and work with other ambitious developers and engineers.
              I like to travel around the EU, USA, and LATAM and learn about the different technologies that lead in each continent. One of my hobbies is photography. I like to take pictures of all of the places I travel to.
              I have a strong interest on the intersection between AI, Fintech, Content Creation, and SaaS business models. <span className="font-bold">If you are interested and/or passionate about one of these areas, do not be scared to reach out to me!</span>
            </h3>
          </div>
          {/* <div className="md:w-1/2 md:pl-4">
            <img src="travelMap.png" alt="Travel Map" className="w-130 h-100 border-4 border-neutral-700" />
          </div> */}
        </div>
      </div>

      {/* Technical Contributions/Projects and Featured Articles Section */}
      <div className="my-16 text-center animate-fade-in max-w-4xl mx-auto w-full px-4 space-y-4 flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-2 space-y-4">
          <h2 className="text-3xl text-neutral-900 font-mono font-bold underline">
            Technical Projects
          </h2>
          {[
            { name: "PosQuotes", href: "https://posquotes.com/" },
            { name: "AI Pixel Artist Bot", href: "https://x.com/ThePixelFan" },
            { name: "Your Next Starbucks Drink", href: "https://www.nextstarbucksdrink.com/" },
            { name: "Go and Have Fun visiting my Github", href: "https://github.com/vix4723" },
            { name: "More Coming Soon...", href: "#" },
          ].map((project, index) => (
            <div key={index} className="text-xl text-neutral-900 hover:text-zinc-500 font-mono font-bold">
              <h3><a href={project.href}>{project.name}</a></h3>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 md:pl-2 space-y-4">
          <h2 className="text-3xl text-neutral-900 font-mono font-bold underline">
            Featured Articles
          </h2>
          {[
            { name: "Grace Hopper Conference 2023 Small Story", href: "https://www.linkedin.com/posts/yueyao1008_ghc-ugcPost-7114372736348553216-86e6?utm_source=share&utm_medium=member_desktop" },
            { name: "2022-2023 UVA CS Department End of Year Awards", href: "https://engineering.virginia.edu/department/computer-science/blogs/cs-department-end-year-award-recipients-2022-2023" },
            { name: "UVA Undergraduate Admissions Instagram Takeover 2023", href: "https://uvaapplication.blogspot.com/2023/03/student-takeover-victoria-vix-clotet.html" },
            { name: "2021-2022 UVA CS Department End of Year Awards", href: "https://engineering.virginia.edu/department/computer-science/blogs/2021-2022-cs-department-end-year-awards" },
            { name: "HooHacks Hackathon 2023", href: "https://www.cavalierdaily.com/article/2023/03/back-on-grounds-hoohacks-2023-is-not-just-a-hackathon" },
          ].map((article, index) => (
            <div key={index} className="text-xl text-neutral-900 hover:text-zinc-500 font-mono font-bold">
              <h3><a href={article.href}>{article.name}</a></h3>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 mb-4 text-center flex items-center justify-center space-x-2">
        <p className="text-neutral-700 font-mono">© 2024 Victoria Clotet. Made with Love 🩵 and Starbucks Coffee</p>
        <img src="starbucks.png" alt="Center icon" className="w-6 h-6" />
      </footer>

    </div>
  );
}
