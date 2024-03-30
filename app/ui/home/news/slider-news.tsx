"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import CardNews from "./card-news";
interface Prop {
	title: string;
	img: string;
	price: string;
}

const SliderNews = ({ items }: { items: Prop[] }) => {
	const [emblaRef] = useEmblaCarousel({ dragFree: true, direction: "rtl" });
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<div
			className="embla ml-auto max-w-60  xl:max-w-[1440px] lg:max-w-[976px] md:max-w-[768px]"
			dir="rtl"
		>
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container ">
					{items.map((item, index) => (
						<div className="embla__slide shrink-0 grow-0 basis-56">
							<CardNews item={item} index={index} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SliderNews;
