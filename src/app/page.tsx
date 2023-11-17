import { IProduct } from "@/interfaces/product";
import { allProducts } from "../../utils/generateFakeProducts";
import styles from "./page.module.css";
import { ProductCard } from "@/components/productCard";

async function getProducts() {
	return allProducts as IProduct[];
}

export default async function Home() {
	const products = await getProducts();

	return (
		<main className={styles.main}>
			<section className={styles.grid}>
				{products.map((p) => (
					<ProductCard key={p.id} data={p} />
				))}
			</section>
		</main>
	);
}
