import Image from "next/image";
import { IProduct } from "@/interfaces/product";
import deleteSVG from "../../../assets/delete.svg";
import styles from "./styles.module.css";
import { QuantityInput } from "./quantityInput";

const data: IProduct = {
	name: "Caneca de cerâmica rústica",
	description:
		"Doloremque demoror voluntarius demens cresco curtus voluptas soleo pecco sollers. Adhaero deduco cibo ultio aperiam catena sequi copiose atrox. Aliquam sono enim terga tracto conculco armarium provident valde sequi.",
	image_url:
		"https://raw.githubusercontent.com/samueldbferreira/capputeeno-cdn/main/uploads/Caneca%2001.jpg",
	category: "caneca",
	id: "9ea0df42-7965-46a5-bd01-36b2b98a4c96",
	price_in_cents: 12.997839427553117,
	sales: 29,
	created_at: new Date("2022-12-22T16:26:12.222Z"),
};

export function Item() {
	return (
		<div className={styles.item}>
			<div className={styles.img}>
				<Image
					alt={data.name}
					src={data.image_url}
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>

			<div className={styles.info}>
				<header>
					<h2>{data.name}</h2>
					<button className={styles.deleteBtn}>
						<Image alt="Remover" src={deleteSVG} />
					</button>
				</header>

				<p>{data.description}</p>

				<div className={styles.controls}>
					<QuantityInput />

					<span className={styles.price}>
						{new Intl.NumberFormat("pt-BR", {
							style: "currency",
							currency: "BRL",
						}).format(data.price_in_cents)}
					</span>
				</div>
			</div>
		</div>
	);
}
