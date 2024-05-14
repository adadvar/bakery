"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import SliderDiscounts from "./slider-discounts";
import offerImg from "@/public/img/offer.svg";
import arrLeft from "@/public/img/arrow_circle_left_fill.svg";

const Discounts = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	const items = [
		{
			title: "کاپ کیک کدوحلوایی1",
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
		<div className="flex flex-col px-8 mb-24">
			<div className="flex flex-row-reverse items-center justify-between mb-12">
				<div className="flex items-center">
					<h1 className="text-2xl text-font-color font-medium text-right ">
						تخفیف ها
					</h1>
					<Image
						src={offerImg}
						alt=""
						width={24}
						height={24}
						className="text-font-color ml-2"
					/>
				</div>
				<Link href={"/"} className="flex items-center">
					<Image
						src={arrLeft}
						alt=""
						width={32}
						height={32}
						className="text-font-color mr-2"
					/>
					<p className="text-base text-font-color font-light">مشاهده همه</p>
				</Link>
			</div>
			<div className="relative">
				<SliderDiscounts items={items} />
			</div>
		</div>
	);
};

export default Discounts;
