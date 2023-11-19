import { IProduct } from "@/interfaces/product";
import styles from "./page.module.css";
import { ProductCard } from "@/components/productCard";

async function getProducts() {
	const res = await fetch("http://localhost:3000/api/products");

	const products = await res.json();

	return products as IProduct[];
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
