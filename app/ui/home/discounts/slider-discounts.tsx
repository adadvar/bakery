"use client";

import useEmblaCarousel from "embla-carousel-react";
import CardDiscounts from "./card-discounts";
interface Prop {
	title: string;
	img: string;
	price: string;
}

const SliderDiscounts = ({ items }: { items: Prop[] }) => {
	const [emblaRef] = useEmblaCarousel({ dragFree: true, direction: "rtl" });

	return (
		<div
			className="embla ml-auto max-w-60 xl:max-w-[1440px] lg:max-w-[976px] md:max-w-[768px]"
			dir="rtl"
		>
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container ">
					{items.map((item: any, index: any) => (
						<div className="embla__slide shrink-0 grow-0 basis-56">
							<CardDiscounts item={item} index={index} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SliderDiscounts;
