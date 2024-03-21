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
		<Link
			href={item.path}
			className="w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center"
		>
			<Image src={item.src} alt="" width={24} height={24} className="m-auto" />
		</Link>
	);
};

export default SideItem;
