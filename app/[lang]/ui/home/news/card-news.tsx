import Image from "next/image";
import React from "react";
import addImg from "@/public/img/add.svg";
interface Prop {
	title: string;
	img: string;
	price: string;
}

const CardNews = ({ item, index }: { item: Prop; index: number }) => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<div className={`group relative bg-bg rounded-3xl`} key={index}>
			<Image
				src={`${base_url}/img/${item.img}`}
				alt={`Slide ${index}`}
				className="rounded-full mx-auto -mb-14"
				width={130}
				height={130}
			/>
			<div className="flex flex-col justify-end h-56 pr-[10px] pb-[16px] pl-[16px] rounded-3xl shadow-[0_7px_29px_0_rgba(100,100,111,0.2)] transition-colors duration-300 ease-in-out group-hover:bg-primary">
				<h2 className="text-base text-font-color font-semibold text-right my-6">
					{item.title}
				</h2>
				<h4 className="text-xs text-gray-font font-light text-right mb-5">
					هر اسلایس
				</h4>
				<div className="flex items-center justify-start gap-1">
					<p className="text-sm font-semibold fa-num">{item.price}</p>
					<p className="text-xs text-gray-font font-light">تومان</p>
				</div>
				<Image
					src={addImg}
					alt={``}
					className="rounded-full absolute bottom-5 left-5 bg-primary"
					width={32}
					height={32}
				/>
			</div>
		</div>
	);
};

export default CardNews;
