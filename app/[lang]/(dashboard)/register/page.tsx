import React from "react";
import Logo from "@/app/[lang]/ui/login/logo";
import RegisterForm from "@/app/[lang]/ui/forms/register-from";

const RegisterPage = () => {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<div className="w-[546px] max-h-[681px] bg-white flex flex-col rounded-2xl items-center justify-center border border-line py-8">
				<Logo />
				<h1 className="text-2xl font-medium text-font-color mb-[10px]">ثبت نام</h1>
				<h4 className="text-base font-normal text-gray-font mb-8">
					سلام؛ لطفا موارد زیر را جهت ثبت نام تکمیل کنید.
				</h4>
				<RegisterForm />
			</div>
		</div>
	);
};

export default RegisterPage;
