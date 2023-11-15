import Image from "next/image";
import bagSVG from "../../../assets/bag.svg";
import styles from "./styles.module.css";

export function BagButton() {
	return (
		<button className={styles.button}>
			<Image src={bagSVG} alt="Bag" />
			<span className={styles.quantity}>2</span>
		</button>
	);
}
