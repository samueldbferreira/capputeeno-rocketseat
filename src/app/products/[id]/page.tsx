import Image from "next/image";
import { IProduct } from "@/interfaces/product";
import { BackButton } from "@/components/backButton";
import bagSVG from "../../../assets/bag-light.svg";
import styles from "./styles.module.css";

async function getProduct(id: string) {
	const res = await fetch(`http://localhost:3000/api/products/${id}`);

	const product = await res.json();

	return product as IProduct;
}

export default async function Product({ params }: { params: { id: string } }) {
	const product = await getProduct(params.id);

	return (
		<main className={styles.container}>
			<BackButton />

			<section className={styles.content}>
				<div className={styles.img}>
					<Image
						alt={product.name}
						src={product.image_url}
						fill
						style={{ objectFit: "cover" }}
					/>
				</div>
				<div>
					<span className={styles.category}>{product.category}</span>

					<h1 className={styles.name}>{product.name}</h1>
					<span className={styles.price}>
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(product.price_in_cents)}
					</span>

					<span className={styles.shipping}>
						*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
						R$900,00.
					</span>

					<h2 className={styles.descriptionTitle}>DESCRIÇÃO</h2>
					<p className={styles.description}>{product.description}</p>

					<button className={styles.buyBtn}>
						<Image src={bagSVG} alt="" />
						<span>ADICIONAR AO CARRINHO</span>
					</button>
				</div>
			</section>
		</main>
	);
}
