import Image from "next/image";
import React from "react";
import img from "@/public/img/shopping_cart.svg";

const CartIcon = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;
	return (
		<div className="w-[84px] h-10 flex items-center px-1 justify-between rounded-full bg-primary-light">
			<Image src={img} alt="" width={24} height={24} className="text-white ml-1" />
			<div className="w-8 h-8 rounded-full bg-white text-center">
				<span className="text-primary text-lg font-normal fa-num">4</span>
			</div>
		</div>
	);
};

export default CartIcon;
