"use client";
import Image from "next/image";
import React from "react";
import SliderNews from "./slider-news";
import Link from "next/link";

const News = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	const images = [
		{
			title: "کاپ کیک کدوحلوایی",
			img: "product1.jpg",
			price: "12.000",
		},
		{
			title: "کاپ کیک کدوحلوایی",
			img: "product1.jpg",
			price: "12.000",
		},
		{
			title: "کاپ کیک کدوحلوایی",
			img: "product1.jpg",
			price: "12.000",
		},
		{
			title: "کاپ کیک کدوحلوایی",
			img: "product1.jpg",
			price: "12.000",
		},
		{
			title: "کاپ کیک کدوحلوایی",
			img: "product1.jpg",
			price: "12.000",
		},
	];

	return (
		<div className="flex flex-col px-8">
			<div className="flex flex-row-reverse items-center justify-between mb-[120px]">
				<div className="flex items-center">
					<h1 className="text-2xl text-font-color font-medium text-right ">
						تازه ها
					</h1>
					<Image
						src={`${base_url}/img/tag.svg`}
						alt=""
						width={24}
						height={24}
						className="text-font-color ml-2"
					/>
				</div>
				<Link href={"/"} className="flex items-center">
					<Image
						src={`${base_url}/img/arrow_circle_left_fill.svg`}
						alt=""
						width={32}
						height={32}
						className="text-font-color mr-2"
					/>
					<p className="text-base text-font-color font-light">مشاهده همه</p>
				</Link>
			</div>
			<div className="">
				<SliderNews images={images} />
			</div>
		</div>
	);
};

export default News;
