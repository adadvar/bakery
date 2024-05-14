import Image from "next/image";
import React from "react";
import img from "@/public/img/search_normal.svg";

const Search = () => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<div className="flex items-center gap-3 rounded-full max-w-[572px] w-full bg-[#fafafa] border border-br h-12 p-1">
			<div className="w-10 h-10 rounded-full bg-primary text-center flex">
				<Image
					src={img}
					alt=""
					width={24}
					height={24}
					className="text-white m-auto"
				/>
			</div>
			<input
				type="text"
				placeholder="...جستجو"
				className="bg-transparent flex-grow border-none outline-none text-right px-3"
			/>
		</div>
	);
};

export default Search;
