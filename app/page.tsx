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
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-cyan-200 to-cyan-100">
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
        <h2 className="text-lg text-neutral-900 font-mono">
          I'm a 22 year old tech entrepreneur who loves to learn about emerging technologies and build cool things with smart people
        </h2>
      </div>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-lg text-neutral-900 font-mono">
          Background
        </h2>
      </div>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-lg text-neutral-900 font-mono">
          Technical Contributions/Projects I worked on
        </h2>
      </div>
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-lg text-neutral-900 font-mono">
          Featured Articles
        </h2>
      </div>
    </div>
  );

}
