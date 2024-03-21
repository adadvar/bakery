"use client";
import React from "react";
import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderProps {
	images: {
		title: string;
		img: string;
		price: string;
	}[];
}

const SliderNews = ({ images }: SliderProps) => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<div className="flex space-x-3 justify-between relative">
			{/* // <Swiper modules={[Pagination]} pagination={{ clickable: true }}> */}
			{images.map((image: any, index: any) => (
				// <SwiperSlide key={index}>
				<div className=" w-56 h-56 pr-[10px] pb-[16px] pl-[16px] bg-white pt shadow-md p-5 rounded-3xl mb-8">
					<Image
						src={`${base_url}/img/${image.img}`}
						alt={`Slide ${index}`}
						className="rounded-full -mt-20 mx-auto"
						width={130}
						height={130}
					/>
					<h2 className="text-base text-font-color font-semibold text-right my-6">
						{image.title}
					</h2>
					<h4 className="text-xs text-gray-font font-light text-right mb-5">
						هر اسلایس
					</h4>
					<div className="flex items-center justify-end space-x-1">
						<p className="text-xs text-gray-font font-light">تومان</p>
						<p className="text-sm font-semibold fa-num">{image.price}</p>
					</div>
					<div className="">
						{/* <Image
							src={`${base_url}/img/add.svg`}
							alt={``}
							className="rounded-full bottom-5 left-5 bg-primary"
							width={24}
							height={24}
						/> */}
					</div>
				</div>
				// </SwiperSlide>
			))}
			{/* // </Swiper> */}
		</div>
	);
};

export default SliderNews;
