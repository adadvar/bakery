import Image from "next/image";
import React from "react";
import img from "@/public/img/insta.svg";

const Insta = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<>
			<Image src={img} alt={``} className="" width={24} height={24} />
		</>
	);
};

export default Insta;
