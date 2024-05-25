"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const photographs = [
	{
		src: "amador.jpg",
		label: "Amador, Panama City",
	},
	{
		src: "chinatownSF.jpg",
		label: "SF's Chinatown",
	},
	{
		src: "collonade.jpg",
		label: "Collonade Club at UVA",
	},
	{
		src: "corner.jpg",
		label: "A Rainy Day at the UVA Corner",
	},
	{
		src: "goldengatebridge.png",
		label: "The Beautiful Golden Gate Bridge in SF",
	},
	{
		src: "moreSF.jpg",
		label: "SF",
	},
	{
		src: "pier39.jpg",
		label: "Pier39 in SF",
	},
	{
		src: "spain-market.jpg",
		label: "Spanish Market in Madrid, Spain",
	},
	{
		src: "spain-nav.jpg",
		label: "Christmas in Madrid, Spain",
	},
];

export default function PhotoGallery() {
	return (
		<div className="bg-gradient-to-tl from-cyan-200 to-cyan-100">
			<Navigation />
			<div className="flex items-center justify-center pt-20 pb-0">
				<img src="favicon.png" alt="Center icon" className="w-32 h-32 mx-32" />
			</div>
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-6 mx-auto mt-0 sm:mt-0 sm:grid-cols-3 lg:gap-12">
					{photographs.map((photo) => (
						<Card key={photo.label}>
							<div className="p-3 relative flex flex-col items-center gap-3 duration-700 group md:gap-6 md:py-18 lg:pb-36 md:p-12">
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from- via-neutral-200 to-transparent"
									aria-hidden="true"
								/>
								<img
									src={photo.src}
									alt={photo.label}
									className="relative z-10 w-full h-auto object-cover"
								/>
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-lg font-medium duration-150 xl:text-2xl text-neutral-800 group-hover:text-neutral-500 font-display">
										{photo.label}
									</span>
								</div>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
