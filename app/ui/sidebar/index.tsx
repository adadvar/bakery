import Image from "next/image";
import React from "react";
import RegularList from "../general/regular-list";
import SideItem from "./side-item";

const Sidebar = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;
	const items = [
		{
			alt: "دسته بندی",
			src: base_url + "/img/category.svg",
			path: "/",
		},
		{
			alt: "تماس با ما",
			src: base_url + "/img/call_menu.svg",
			path: "/",
		},
		{
			alt: "تاریخچه خرید",
			src: base_url + "/img/vuesax_bulk_task_square.svg",
			path: "/",
		},
		{
			alt: "سبد خرید",
			src: base_url + "/img/shopping_cart2.svg",
			path: "/",
		},
		{
			alt: "حساب کاربری",
			src: base_url + "/img/profile.svg",
			path: "/",
		},
	];

	return (
		<div className="w-[118px] min-w-[118px] sticky top-0 h-screen overflow-y-scroll scrollbar-hide bg-white border border-l-br py-5">
			<div className="flex flex-col items-center space-y-12">
				<div className="flex flex-col items-center space-y-5">
					<Image
						src={`${base_url}/img/logo.png`}
						alt=""
						width={80}
						height={80}
						className="text-white m-auto"
					/>
					<div className="w-14 h-14 flex rounded-full items-center bg-primary m-0">
						<Image
							src={`${base_url}/img/home.svg`}
							alt=""
							width={24}
							height={24}
							className="text-white-color m-auto"
						/>
					</div>
				</div>
				<RegularList items={items} ItemComponent={SideItem} resourceName="item" />
			</div>
		</div>
	);
};

export default Sidebar;
