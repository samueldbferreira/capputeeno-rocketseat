import { BackButton } from "@/components/backButton";
import { Summary } from "./summary";
import { Item } from "./item";
import styles from "./styles.module.css";

export default function Cart() {
	return (
		<main className={styles.container}>
			<section className={styles.cart}>
				<BackButton />

				<div className={styles.summaryHeader}>
					<h1>SEU CARRINHO</h1>
					<p>
						Total (3 produtos){" "}
						<span>
							<strong>R$161,00</strong>
						</span>
					</p>
				</div>

				<ul className={styles.itemsList}>
					<li>
						<Item />
					</li>
				</ul>
			</section>

			<Summary />
		</main>
	);
}
