import Image from "next/image";
import bagSVG from "../../../assets/bag.svg";
import styles from "./styles.module.css";
import Link from "next/link";

export function BagButton() {
	return (
		<button className={styles.button}>
			<Link href="/cart">
				<Image src={bagSVG} alt="Bag" />
				<span className={styles.quantity}>2</span>
			</Link>
		</button>
	);
}
