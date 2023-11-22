import Link from "next/link";
import styles from "./styles.module.css";

export function Summary() {
	return (
		<section className={styles.summary}>
			<h2>RESUMO DO PEDIDO</h2>

			<p className={styles.summaryLine}>
				<span>Subtotal de produtos</span>
				<span>R$ 161,00</span>
			</p>
			<p className={styles.summaryLine}>
				<span>Entrega</span>
				<span>R$ 40,00</span>
			</p>

			<hr />

			<p className={styles.summaryLine}>
				<span>
					<strong>Total</strong>
				</span>
				<span>
					<strong>R$ 201,00</strong>
				</span>
			</p>

			<button className={styles.buy}>FINALIZAR A COMPRA</button>

			<nav className={styles.links}>
				<Link href="#">AJUDA</Link>
				<Link href="#">REEMBOLSOS</Link>
				<Link href="#">ENTTREGAS E FRETE</Link>
				<Link href="#">TROCAS E DEVOLUÇÕES</Link>
			</nav>
		</section>
	);
}
