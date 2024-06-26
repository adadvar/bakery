import Image from "next/image";
import React from "react";
import img from "@/public/img/email.svg";

const EmailR = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<div className="flex items-center justify-center">
			<div className="text-center font-normal md:text-sm text-xs ">
				Raanasheykhi08@gmail.com
			</div>
			<Image
				src={img}
				alt=""
				width={16}
				height={16}
				className="text-font-color ml-2 "
			/>
		</div>
	);
};

export default EmailR;
