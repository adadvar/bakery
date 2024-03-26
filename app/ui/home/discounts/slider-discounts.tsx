"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
interface Prop {
	title: string;
	img: string;
	price: string;
}

const SliderDiscounts = ({ items }: { items: Prop[] }) => {
	const [emblaRef] = useEmblaCarousel({ dragFree: true, direction: "rtl" });

	return (
		<div
			className="embla mx-auto max-w-60 xl:max-w-[1440px] lg:max-w-[976px] md:max-w-[768px]"
			dir="rtl"
		>
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container ">
					{items.map((item: any, index: any) => (
						<div className="embla__slide shrink-0 grow-0 basis-56">
							<Slide item={item} index={index} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default SliderDiscounts;

const Slide = ({ item, index }: { item: Prop; index: number }) => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<div className={`relative bg-white rounded-3xl`} key={index}>
			<Image
				src={`${base_url}/img/${item.img}`}
				alt={`Slide ${index}`}
				className="rounded-full mx-auto -mb-14"
				width={130}
				height={130}
			/>
			<div className="flex flex-col justify-end h-56 pr-[10px] pb-[16px] pl-[16px] rounded-3xl shadow-[0_7px_29px_0_rgba(100,100,111,0.2)]">
				<h2 className="text-base text-font-color font-semibold text-right my-6">
					{item.title}
				</h2>
				<h4 className="text-xs text-gray-font font-light text-right mb-5">
					هر اسلایس
				</h4>
				<div className="flex items-center justify-start gap-1">
					<p className="text-sm font-semibold fa-num">{item.price}</p>
					<p className="text-xs text-gray-font font-light line-through">تومان</p>
				</div>
				<div className="flex items-center justify-start mr-2 gap-1">
					<p className="text-sm font-semibold fa-num">{item.price}</p>
					<p className="text-xs text-gray-font font-light">تومان</p>
				</div>
				<Image
					src={`${base_url}/img/add.svg`}
					alt={``}
					className="rounded-full absolute bottom-5 left-5 bg-primary"
					width={32}
					height={32}
				/>
			</div>
		</div>
	);
};
