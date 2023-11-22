import Image from "next/image";
import downSVG from "../../../../assets/down.svg";
import styles from "./styles.module.css";

export function QuantityInput() {
	return (
		<div className={styles.input}>
			<input type="text" value={12} readOnly />
			<button>
				<Image alt="" src={downSVG} style={{ objectFit: "cover" }} />
			</button>
		</div>
	);
}
