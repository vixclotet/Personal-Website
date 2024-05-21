import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

//Navigation Links
const navigation = [
  { name: "Contact Me", href: "/contact" },
  { name: "Photography", href: "/photos" },
];

//Actual Website Starts
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-screen min-h-screen overflow-x-hidden overflow-y-auto bg-gradient-to-tl from-cyan-200 to-cyan-100">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl duration-500 text-neutral-700 hover:text-zinc-300 font-mono"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-1000 bg-yellow-600 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Victoria Clotet
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-xl text-neutral-900 font-mono">
          I'm a 22 year old tech entrepreneur who loves to learn about emerging technologies and build cool things with smart people
        </h2>
      </div>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-xl text-neutral-900 font-mono font-bold">
          Background
        </h2>
      </div>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-xl text-neutral-900 font-mono font-bold">
          Technical Contributions/Projects I worked on
        </h2>
      </div>
      <div className="my-16 text-center animate-fade-in space-y-6">
        <h2 className="text-3xl text-neutral-900 font-mono font-bold">
          Featured Articles
        </h2>
        <div className="flex flex-col space-y-4">
        <div className="text-lg text-neutral-900 font-mono font-bold">
          <h3><a href="https://www.linkedin.com/posts/yueyao1008_ghc-ugcPost-7114372736348553216-86e6?utm_source=share&utm_medium=member_desktop">Grace Hopper Conference 2023 Small Story</a></h3>
        </div>
        <div>
          <h3><a href="https://engineering.virginia.edu/cs-department-end-year-award-recipients-2022-2023">2022-2023 UVA CS Department End of Year Awards</a></h3>
        </div>
        <div>
          <h3><a href="https://uvaapplication.blogspot.com/2023/03/student-takeover-victoria-vix-clotet.html">UVA Undergraduate Admissions Instagram Takeover 2023</a></h3>
        </div>
        <div>
          <h3><a href="https://engineering.virginia.edu/2021-2022-cs-department-end-year-awards">2021-2022 UVA CS Department End of Year Awards</a></h3>
        </div>
        <div>
          <h3><a href="www.cavalierdaily.com/article/2023/03/back-on-grounds-hoohacks-2023-is-not-just-a-hackathon">HooHacks Hackathon 2023</a></h3>
        </div>
        </div>
      </div>
    </div>
  );

}
