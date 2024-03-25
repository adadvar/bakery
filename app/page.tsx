import Image from "next/image";
import Hero from "./ui/home/hero";
import News from "./ui/home/news";
import Categories from "./ui/home/category";
import Discounts from "./ui/home/discounts";

export default function Home() {
	return (
		<main className="">
			<Hero />
			<News />
			<Categories />
			<Discounts />
		</main>
	);
}
