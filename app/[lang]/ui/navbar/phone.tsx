import Image from "next/image";
import React from "react";
import img from "@/public/img/call.svg";

const Phone = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;
	return (
		<div className="h-8 flex items-center p-1  justify-between">
			<Image
				src={img}
				alt=""
				width={24}
				height={24}
				className="text-font-color mr-2"
			/>
			<div className="text-center font-normal text-[16px]">09106646279</div>
		</div>
	);
};

export default Phone;
