import Image from "next/image";
import React from "react";

const Location = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<div className="flex items-center  mr-6 justify-between">
			<div className="text-center font-medium md:text-sm text-xs mt-1">
				خیابان ولیعصر، روبروی پارک ملت، کوچه رسایی، پلاک 12
			</div>
			<Image
				src={`${base_url}/img/location_tick.svg`}
				alt=""
				width={16}
				height={16}
				className="text-font-color ml-2"
			/>
		</div>
	);
};

export default Location;
