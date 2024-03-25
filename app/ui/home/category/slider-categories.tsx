"use client";

import Image from "next/image";
interface Prop {
	title: string;
	img: string;
}

const SliderCategories = ({ items }: { items: Prop[] }) => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<div className="flex items-center flex-wrap gap-5 flex-row-reverse justify-between">
			{items.map((item: any, index: any) => (
				<div className="flex flex-col items-center space-y-2">
					<Image
						src={`${base_url}/img/${item.img}`}
						alt={`Slide ${index}`}
						className="rounded-full mb-5 shadow-md"
						width={152}
						height={152}
					/>
					<h2 className="text-xl text-font-color font-normal text-right">
						{item.title}
					</h2>
				</div>
			))}
		</div>
	);
};

export default SliderCategories;
