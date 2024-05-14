import Image from "next/image";
import React from "react";
import Whatsapp from "./whatsapp";
import Insta from "./insta";
import Phone from "./phone";
import Email from "./email";
import Logo from "./logo";
import Location from "./location";
import PhoneR from "./phone-r";
import EmailR from "./email-r";

const Footer = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;
	const logged = false;
	return logged ? (
		<div
			className={`relative overflow-hidden max-w-[1114px] bg-primary flex items-center justify-start text-center space-x-8  text-white-color mt-16`}
		>
			<div
				className="absolute inset-0 bg-bg  origin-bottom-right"
				style={{ transform: "skewY(37deg)" }}
			/>
			<Whatsapp />
			<Insta />
			<Email />
			<Phone />
		</div>
	) : (
		<div
			className={`bg-primary flex flex-col items-center pt-6 justify-center rounded-t-2xl h-[288px] text-white-color mt-64 `}
		>
			<Logo />
			<span className="text-xs font-medium max-w-[593px] text-center leading-5 mb-6">
				کمی توضیحات درباره خودتون کمی توضیحات درباره خودتون کمی توضیحات درباره
				خودتون کمی توضیحات درباره خودتون کمی توضیحات درباره خودتون کمی توضیحات
				درباره خودتون
			</span>
			<div className="flex gap-6 mb-5">
				<Whatsapp />
				<Insta />
			</div>
			<hr className="w-full h-1 mt-1" />
			<div className="md:h-[61px] md:w-full md:flex md:flex-row-reverse flex-col justify-start md:items-center md:space-x-16 md:space-x-reverse">
				<Location />
				<PhoneR />
				<EmailR />
			</div>
		</div>
	);
};

export default Footer;
