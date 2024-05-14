"use client";
import Image from "next/image";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import arrLeft from "@/public/img/arrow-circle-left.svg";
const SliderHero = ({ images }: { images: string[] }) => {
	const base_url = process.env.NEXT_PUBLIC_BASE_URL as string;

	return (
		<Swiper
			modules={[Pagination]}
			pagination={{ clickable: true }}
			slidesPerView={1}
			breakpoints={{
				1440: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				976: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
			}}
		>
			{images.map((image: any, index: any) => (
				<SwiperSlide key={index}>
					<Image
						src={`${base_url}/img/${image}`}
						alt=""
						width={0}
						height={0}
						sizes="100vw"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#606060] via-transparent to-transparent"></div>
					<div className="absolute bottom-14 text-xl text-center font-medium text-br inset-x-0">
						<div className="flex justify-center space-x-2 mb-3">
							<p>تخیف بگیرید</p>
							<p>10%</p>
						</div>
						<Link href={"/"} className="flex justify-center font-normal space-x-3">
							<Image src={arrLeft} alt="" width={16} height={16} className="" />
							<p>مشاهده</p>
						</Link>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SliderHero;
