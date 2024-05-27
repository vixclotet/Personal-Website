"use client";
import { Github, InstagramIcon, Mail, Twitter, TwitterIcon, X } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Analytics } from "@vercel/analytics/react"

const socials = [
	{
		icon: <TwitterIcon size={20} />,
		href: "https://twitter.com/vixclotet",
		label: "Twitter",
		handle: "@vixclotet",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:vixbusinesstech@gmail.com",
		label: "Email",
		handle: "vixbusinesstech@gmail.com",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:victoriaclotet@ieee.com",
		label: "IEEE Email",
		handle: "victoriaclotet@ieee.org",
	},
	{
		icon: <InstagramIcon size={20} />,
		href: "https://www.instagram.com/vixclotet/",
		label: "Instagram",
		handle: "@vixclotet",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/vix4723",
		label: "Github",
		handle: "@Vix4723",
	},
];

export default function Example() {
	return (
		<div className="bg-gradient-to-tl from-cyan-200 to-cyan-100">
			<Navigation />
			<div className="flex items-center justify-center pt-20 pb-0">
				<img src="favicon.png" alt="Center icon" className="w-32 h-32 mx-32" />
			</div>
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-6 mx-auto mt-0 sm:mt-0 sm:grid-cols-3 lg:gap-12">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-3 relative flex flex-col items-center gap-3 duration-700 group md:gap-6 md:py-18 lg:pb-36 md:p-12"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from- via-neutral-200 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-10 h-10 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-lg font-medium duration-150 xl:text-2xl text-neutral-800 group-hover:text-neutral-500 font-display">
										{s.handle}
									</span>
									<span className="mt-3 text-sm text-center duration-1000 text-neutral-900 group-hover:text-neutral-500">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
