import Image from "next/image";
import Link from "next/link";
import SliderHero from "./slider-hero";

const Hero = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<div className="flex flex-col-reverse items-center mx-auto px-8 mt-4 mb-20 gap-5 lg:space-x-[14px] lg:flex-row lg:gap-0">
			<div className="lg:w-[25%] relative rounded-3xl h-[386px] lg:max-h-[386px] overflow-hidden">
				<SliderHero images={["lore_schodts.jpg", "lore_schodts.jpg"]} />
			</div>

			<div className="lg:w-[75%] relative rounded-3xl h-[386px] lg:max-h-[386px] overflow-hidden">
				<Image
					src={`${base_url}/img/assortment_pieces_cake_1.jpg`}
					alt=""
					width={0}
					height={0}
					sizes="100vw"
					className="w-full h-full object-cover"
				/>
				<div className="absolute top-[43px] right-[32px] text-right">
					<h1 className="text-[38px] text-primary font-extrabold">بلو کیک</h1>
					<h2 className="text-[22px] text-primary font-normal mt-9 mb-4">
						.یک لحظه شیرین را با ما تجربه کنید
					</h2>
					<h2 className="text-[18px] text-primary font-light">
						.یک لحظه شیرین را با ما تجربه کنید
					</h2>
				</div>
			</div>
		</div>
	);
};

export default Hero;
