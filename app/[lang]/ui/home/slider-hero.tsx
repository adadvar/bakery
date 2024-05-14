"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import arrLeft from "@/public/img/arrow_circle_left.svg";

const SliderHero = ({ images }: { images: string[] }) => {
	const [emblaRef] = useEmblaCarousel();
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<div className="embla w-full h-full" ref={emblaRef}>
			<div className="embla__container w-full h-full">
				{images.map((image: any, index: any) => (
					<div className="embla__slide shrink-0 grow-0 basis-full" key={index}>
						<Image
							src={`${base_url}/img/${image}`}
							alt=""
							width={0}
							height={0}
							sizes="100vw"
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-[#606060] via-transparent to-transparent"></div>
						<div className="absolute bottom-14 text-xl text-center font-medium text-br inset-x-0">
							<div className="flex justify-center space-x-2 mb-3">
								<p>تخیف بگیرید</p>
								<p>10%</p>
							</div>
							<Link href={"/"} className="flex justify-center font-normal space-x-3">
								<Image src={arrLeft} alt="" width={16} height={16} className="" />
								<p>مشاهده</p>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SliderHero;
