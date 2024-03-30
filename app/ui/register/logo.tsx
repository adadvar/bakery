import Image from "next/image";
import React from "react";

const logo = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<Image
			src={`${base_url}/img/logo.png`}
			alt=""
			width={80}
			height={80}
			className="m-auto rounded-full mb-12"
		/>
	);
};

export default logo;
