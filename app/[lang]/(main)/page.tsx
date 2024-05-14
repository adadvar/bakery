import Image from "next/image";
import Hero from "@/app/[lang]/ui/home/hero";
import News from "@/app/[lang]/ui/home/news";
import Categories from "@/app/[lang]/ui/home/category";
import Discounts from "@/app/[lang]/ui/home/discounts";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

export default async function Home({
	params: { lang },
}: {
	params: { lang: Locale };
}) {
	const dictionary = await getDictionary(lang);
	return (
		<main className="">
			<Hero />
			<News />
			<Categories />
			<Discounts />
		</main>
	);
}
