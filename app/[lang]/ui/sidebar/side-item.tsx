import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {
	alt: string;
	src: string;
	path: string;
};
const SideItem = ({ item }: { item: Props }) => {
	return (
		<div className="group flex flex-col items-center">
			<Link
				href={item.path}
				className=" w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center"
			>
				<Image src={item.src} alt="" width={24} height={24} className="m-auto" />
			</Link>
			<p className="text-[10px] text-font-color transition ease-in-out duration-200 opacity-0 group-hover:opacity-100">
				{item.alt}
			</p>
		</div>
	);
};

export default SideItem;
