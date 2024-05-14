import Image from "next/image";
import React from "react";
import img from "@/public/img/call2.svg";

const Phone = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<div className="flex items-center p-1 pt-2 justify-between">
			<Image
				src={img}
				alt=""
				width={16}
				height={16}
				className="text-font-color mr-2"
			/>
			<div className="text-center font-medium text-sm mt-1">09106646279</div>
		</div>
	);
};

export default Phone;
