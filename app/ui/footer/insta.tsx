import Image from "next/image";
import React from "react";

const Insta = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<>
			<Image
				src={`${base_url}/img/insta.svg`}
				alt={``}
				className=""
				width={24}
				height={24}
			/>
		</>
	);
};

export default Insta;
