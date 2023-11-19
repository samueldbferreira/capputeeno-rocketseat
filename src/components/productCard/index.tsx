import { IProduct } from "@/interfaces/product";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

interface ProductCardProps {
	data: IProduct;
}

export function ProductCard({ data }: ProductCardProps) {
	return (
		<Link href={`products/${data.id}`} className={styles.card}>
			<div className={styles.img}>
				<Image
					alt={data.name}
					src={data.image_url}
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>

			<div className={styles.info}>
				<h2>{data.name}</h2>
				<hr />
				<span>
					{new Intl.NumberFormat("pt-BR", {
						style: "currency",
						currency: "BRL",
					}).format(data.price_in_cents)}
				</span>
			</div>
		</Link>
	);
}
