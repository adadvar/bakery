"use client";

import CartIcon from "./cart-icon";
import Email from "./email";
import LoginButton from "./login-button";
import PersonPhoto from "./person-photo";
import Phone from "./phone";
import Search from "./search";

const Navbar = () => {
	const logged = false;
	return (
		<nav className="p-[25px] border-b border-br bg-white">
			<div className="hidden items-center justify-between space-x-6 lg:flex">
				<div className="flex space-x-6">
					{logged ? <PersonPhoto /> : <LoginButton />}
					<CartIcon />
					<Email />
					<Phone />
				</div>
				<Search />
			</div>
		</nav>
	);
};

export default Navbar;
