import Image from "next/image";
import React from "react";
import Button from "../login/button";
import Link from "next/link";

const LoginForm = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<form className="w-full px-28 flex flex-col items-center space-y-4">
			<div className="w-full h-[41px] flex flex-row-reverse space-x-[10px] space-x-reverse items-center rounded-[10px] border border-gray-font px-3">
				<Image
					src={`${base_url}/img/sms.png`}
					alt=""
					width={16}
					height={16}
					className="w-4 h-4"
				/>
				<input
					type="text"
					className="w-full text-right text-xs outline-none"
					placeholder="ایمیل"
				/>
			</div>

			<div className="w-full h-[41px] flex flex-row-reverse space-x-[10px] space-x-reverse items-center rounded-[10px] border border-gray-font px-3 mb-24">
				<Image
					src={`${base_url}/img/key.png`}
					alt=""
					width={16}
					height={16}
					className="w-4 h-4"
				/>
				<input
					type="text"
					className="w-full text-right text-xs outline-none"
					placeholder="رمز عبور"
				/>
				<button className="">
					<Image
						src={`${base_url}/img/eye.png`}
						alt=""
						width={16}
						height={16}
						className="w-4 h-4"
					/>
				</button>
			</div>
			<Link href={"/"} className="text-primary text-xs">
				رمز عبور خود را فراموش کرده اید؟
			</Link>
			<Button />
			<div className="flex text-sm">
				<Link href={"/"} className="text-primary">
					.ایجاد کنید
				</Link>

				<span className="text-font-color">&nbsp;حساب کاربری ندارید؟</span>
			</div>
		</form>
	);
};

export default LoginForm;