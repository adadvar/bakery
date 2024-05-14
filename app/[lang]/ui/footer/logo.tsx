import Image from "next/image";
import React from "react";
import img from "@/public/img/logo.png";

const logo = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<Image
			src={img}
			alt=""
			width={80}
			height={80}
			className="text-white m-auto border-2 border-white rounded-full mb-4"
		/>
	);
};

export default logo;
