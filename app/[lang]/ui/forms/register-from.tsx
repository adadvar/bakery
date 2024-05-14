import Image from "next/image";
import React from "react";
import Button from "../register/button";
import Link from "next/link";
import smsImg from "@/public/img/sms.png";
import keyImg from "@/public/img/key.png";
import eyeImg from "@/public/img/eye.png";

const RegisterForm = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<form className="w-full px-28 flex flex-col items-center space-y-4">
			<div className="w-full h-[41px] flex flex-row-reverse space-x-[10px] space-x-reverse items-center rounded-[10px] border border-gray-font px-3">
				<Image src={smsImg} alt="" width={16} height={16} className="w-4 h-4" />
				<input
					type="text"
					className="w-full text-right text-xs outline-none"
					placeholder="ایمیل"
				/>
			</div>

			<div className="w-full h-[41px] flex flex-row-reverse space-x-[10px] space-x-reverse items-center rounded-[10px] border border-gray-font px-3 mb-24">
				<Image src={keyImg} alt="" width={16} height={16} className="w-4 h-4" />
				<input
					type="text"
					className="w-full text-right text-xs outline-none"
					placeholder="رمز عبور"
				/>
				<button className="">
					<Image src={eyeImg} alt="" width={16} height={16} className="w-4 h-4" />
				</button>
			</div>

			<div className="w-full h-[41px] flex flex-row-reverse space-x-[10px] space-x-reverse items-center rounded-[10px] border border-gray-font px-3 mb-24">
				<Image src={keyImg} alt="" width={16} height={16} className="w-4 h-4" />
				<input
					type="text"
					className="w-full text-right text-xs outline-none"
					placeholder="رمز عبور"
				/>
				<button className="">
					<Image src={eyeImg} alt="" width={16} height={16} className="w-4 h-4" />
				</button>
			</div>
			<Button />
			<div className="flex text-base">
				<Link href={"/"} className="text-primary">
					.وارد شوید
				</Link>

				<span className="text-font-color">&nbsp;حساب کاربری دارید؟</span>
			</div>
		</form>
	);
};

export default RegisterForm;
