"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import SliderCategories from "./slider-categories";
import img from "@/public/img/category2.svg";

const Categories = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	const items = [
		{
			title: "کیک عصرانه",
			img: "cat1.png",
		},
		{
			title: "کیک تولد",
			img: "cat2.png",
		},
		{
			title: "کاپ کیک",
			img: "cat3.png",
		},
		{
			title: "جار کیک",
			img: "cat4.png",
		},
		{
			title: "دونات",
			img: "cat5.png",
		},
		{
			title: "متفرقه",
			img: "cat6.png",
		},
	];

	return (
		<div className="flex flex-col px-8 mb-24">
			<div className="flex flex-row-reverse items-center justify-between mb-12">
				<div className="flex items-center">
					<h1 className="text-2xl text-font-color font-medium text-right ">
						دسته بندی ها{" "}
					</h1>
					<Image
						src={img}
						alt=""
						width={24}
						height={24}
						className="text-font-color ml-2"
					/>
				</div>
			</div>
			<div className="relative">
				<SliderCategories items={items} />
			</div>
		</div>
	);
};

export default Categories;
