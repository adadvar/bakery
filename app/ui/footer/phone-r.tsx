import Image from "next/image";
import React from "react";

const PhoneR = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<div className="flex items-center justify-center">
			<div className="text-center font-medium md:text-sm text-xs mt-1">
				09106646279
			</div>
			<Image
				src={`${base_url}/img/call2.svg`}
				alt=""
				width={16}
				height={16}
				className="text-font-color ml-2"
			/>
		</div>
	);
};

export default PhoneR;
