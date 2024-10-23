"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import Particles from "./components/particles";
import { Linkedin } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

// Navigation Links
const navigation = [
  { name: "Contact Me", href: "/contact" },
  { name: "Photos", href: "/photos" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/victoria-clotet/" },
  { name: "X/Twitter", href: "https://x.com/vixclotet" },
  { name: "Buy Me A Coffee ☕", href: "https://buymeacoffee.com/vixclotet", isSpecial: true },
];

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 touch-auto bg-fixed">
      <nav className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-4xl mx-auto w-full px-4 py-2 flex items-center justify-between backdrop-blur-sm bg-white/30 rounded-full">
          <ul className="flex items-center gap-4">
            {navigation.map((item, index) => (
              <li key={index} className="w-full md:w-auto text-center">
                <Link
                  href={item.href}
                  className={`block py-2 px-4 text-xl duration-500 text-neutral-700 hover:text-zinc-300 font-mono ${item.isSpecial ? 'bg-pink-200 text-black rounded-full' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="w-full md:w-auto text-center">
            <img src="favicon.png" alt="Center icon" className="w-24 h-24 mx-auto md:mx-16" />
          </div>
        </div>
      </nav>
      <div className="hidden w-screen h-px animate-glow mt-14 md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />
      <h1 className="z-10 text-4xl text-transparent font-display duration-1000 bg-fuchsia-600 cursor-default text-edge-outline animate-title sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text mt-24">
        Victoria Clotet
      </h1>

      <div className="hidden w-screen space-y-6 h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-8 flex justify-center animate-fade-in max-w-4xl w-full mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-full">
          <div className="md:col-span-3 flex justify-center">
            <div className="text-left w-full space-y-4 max-w-3xl">
              <h2 className="text-xl text-neutral-900 font-mono">
                Hi! I'm a 23 year-old tech entrepreneur who loves to learn about emerging technologies and build cool things with smart and ambitious people.
              </h2>
              <h3 className="text-xl text-neutral-900 font-mono">
                📍 Currently: in Madrid, Spain, send me an email at <a href="mailto:vixbusinesstech@gmail.com" className="text-xl text-fuchsia-600 font-mono">vixbusinesstech@gmail.com</a> or a DM on Twitter/X at <a href="https://x.com/vixclotet" className="text-xl text-fuchsia-600 font-mono">@vixclotet</a>
              </h3>
              <h2 className="text-2xl text-neutral-900 font-extrabold font-mono">
                Right now, I'm...
              </h2>
              <ul className="list-disc list-inside text-xl text-neutral-900 font-mono ml-5">
                <li>exploring new cities 🌇</li>
                <li>building in tech 💻</li>
                <li>networking 🤝</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-2 flex flex-col items-center">
            <img src="SFPic.jpg" alt="SF Pic" className="w-60 h-80 border-4 border-neutral-700" />
            <h3 className="font-mono">I loooove SF 🌉</h3>
          </div>
        </div>
      </div>

      <div className="my-8 text-center animate-fade-in max-w-4xl mx-auto w-full px-4 space-y-6">
        <h2 className="text-3xl text-neutral-900 font-mono font-extrabold">
          I am currently interested in...
        </h2>
        <div className="bg-fuchsia-500 text-white p-4 rounded-lg">
          <h3 className="text-lg text-white font-mono">
            Consumer tech and Entertainment, FinTech, and SaaS tools and applications
          </h3>
        </div>
        <h2 className="text-3xl text-neutral-900 font-mono font-extrabold">
          More About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-center">
            <h3 className="text-lg text-neutral-900 font-mono">
              I'm a recent UVA graduate who double majored in Computer Science and Commerce.
              I like to travel around the EU, USA, and LATAM and build innovative projects with emerging technologies.
            </h3>
          </div>
        </div>
      </div>

      <div className="my-8 text-center animate-fade-in max-w-4xl mx-auto w-full px-4 space-y-6">
        <h2 className="text-3xl text-neutral-900 font-mono font-extrabold">
          Previously, I worked on these side projects 🛠️
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "Silithius 🤠 (buildspace s5)", href: "https://www.silithius.com" },
            { name: "PosQuotes ❝❞", href: "https://posquotes.com/" },
          ].map((project, index) => (
            <div
              key={index}
              className="text-xl text-neutral-900 font-mono font-bold transform bg-sky-100 transition-transform hover:translate-y-1 hover:shadow-lg p-4 border border-gray-200 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <h3>
                <a href={project.href}>{project.name}</a>
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8 text-center animate-fade-in max-w-4xl mx-auto w-full px-4 space-y-6">
        <h2 className="text-3xl text-neutral-900 font-mono font-bold">
          I've been featured on these articles 📰
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "Grace Hopper Conference 2023 Small Story", href: "https://www.linkedin.com/posts/yueyao1008_ghc-ugcPost-7114372736348553216-86e6?utm_source=share&utm_medium=member_desktop" },
            { name: "2022-2023 UVA CS Department End of Year Awards", href: "https://engineering.virginia.edu/department/computer-science/blogs/cs-department-end-year-award-recipients-2022-2023" },
            { name: "UVA Undergraduate Admissions Instagram Takeover 2023", href: "https://uvaapplication.blogspot.com/2023/03/student-takeover-victoria-vix-clotet.html" },
            { name: "2021-2022 UVA CS Department End of Year Awards", href: "https://engineering.virginia.edu/department/computer-science/blogs/2021-2022-cs-department-end-year-awards" },
            { name: "HooHacks Hackathon 2023", href: "https://www.cavalierdaily.com/article/2023/03/back-on-grounds-hoohacks-2023-is-not-just-a-hackathon" },
          ].map((article, index) => (
            <div
              key={index}
              className="text-xl text-neutral-900 font-mono bg-sky-100 font-bold transform transition-transform hover:translate-y-1 hover:shadow-lg p-4 border border-gray-200 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <h3>
                <a href={article.href}>{article.name}</a>
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="my-8 text-center animate-fade-in max-w-4xl mx-auto w-full px-4 space-y-6">
        <h2 className="text-3xl text-neutral-900 font-mono font-extrabold">
          Community & People 🌍
        </h2>
        <div className="bg-pink-500 text-white p-4 rounded-lg">
          <h3 className="text-lg text-white font-mono italic">
            "Community is a place where connections happen, and value is created" - Unknown
          </h3>
        </div>
        <div className="flex flex-col font-mono md:flex-row items-center">
          <div className="text-center w-full">
            <h3 className="text-xl text-neutral-900 font-mono font-bold">
              Communities that I've been part of
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="bg-gray-100 text-xl p-4 rounded-xl flex-1 min-w-[200px] max-w-[300px]">
                IEEE Panama Section & IEEE Entrepreneurship
              </div>
              <div className="bg-gray-100 text-xl p-4 rounded-lg flex-1 min-w-[200px] max-w-[300px]">
                buildspace nights&weekends s5 💛
              </div>
              <div className="bg-gray-100 text-xl p-4 rounded-lg flex-1 min-w-[200px] max-w-[300px]">
                UVA Women in Computer Science
              </div>
              <div className="bg-gray-100 text-xl p-4 rounded-lg flex-1 min-w-[200px] max-w-[300px]">
                UVA Association of Computing Machinery
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-8 text-center animate-fade-in max-w-4xl mx-auto w-full px-4 space-y-6">
        <h2 className="text-3xl text-neutral-900 font-mono font-extrabold">
          My Hobbies 🏃‍♀️
        </h2>
        <div className="flex flex-col font-mono md:flex-row items-center">
          <div className="text-center w-full">
            <h3 className="text-xl text-neutral-900 font-mono font-bold">
              This is what I do in my free time
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="bg-gray-100 text-xl p-4 rounded-xl flex-1 min-w-[200px] max-w-[300px]">
                Hiking 🏔️
              </div>
              <div className="bg-gray-100 text-xl p-4 rounded-lg flex-1 min-w-[200px] max-w-[300px]">
                Gym & Indoor Cycling 🚴
              </div>
              <div className="bg-gray-100 text-xl p-4 rounded-lg flex-1 min-w-[200px] max-w-[300px]">
                Photography 📸
                <a href="https://www.vixclotet.com/photos" className="text-xl text-fuchsia-600 font-mono">check my photos!</a>
              </div>
              <div className="bg-gray-100 text-xl p-4 rounded-lg flex-1 min-w-[200px] max-w-[300px]">
                Traveling ✈️
              </div>
              <div className="bg-gray-100 text-xl p-4 rounded-lg flex-1 min-w-[200px] max-w-[300px]">
                Explore Bubble Tea Shops🧋
              </div>
              <div className="bg-gray-100 text-xl p-4 rounded-lg flex-1 min-w-[200px] max-w-[300px]">
                Explore New Restaurants and Eat Brunch 🥯
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 mb-4 text-center flex items-center justify-center space-x-2">
        <p className="text-neutral-700 font-mono">© 2024 Victoria Clotet. Made with Love 🩵 and Starbucks Coffee</p>
        <img src="starbucks.png" alt="Center icon" className="w-6 h-6" />
      </footer>
    </div>
  );
}