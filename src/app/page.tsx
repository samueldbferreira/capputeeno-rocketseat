import { IProduct } from "@/interfaces/product";
import styles from "./page.module.css";
import { ProductCard } from "@/components/productCard";
import Image from "next/image";
import downSVG from "../assets/down.svg";
import React from "react";

async function getProducts() {
	const res = await fetch("http://localhost:3000/api/products");

	const products = await res.json();

	return products as IProduct[];
}

export default async function Home() {
	const products = await getProducts();

	return (
		<main className={styles.main}>
			<div className={styles.menu}>
				<nav className={styles.nav}>
					<a>TODOS OS PRODUTOS</a>
					<a>CAMISETAS</a>
					<a>CANECAS</a>
				</nav>
				<a className={styles.sort}>
					<span>Organizar por</span>
					<Image alt="" src={downSVG} />
				</a>
			</div>

			<section className={styles.grid}>
				{products.map((p) => (
					<ProductCard key={p.id} data={p} />
				))}
			</section>
		</main>
	);
}
