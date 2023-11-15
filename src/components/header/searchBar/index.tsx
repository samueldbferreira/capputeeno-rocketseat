import Image from "next/image";
import styles from "./styles.module.css";
import searchSVG from "../../../assets/search.svg";

export function SearchBar() {
	return (
		<div className={styles.searchBar}>
			<input
				type="text"
				placeholder="Procurando por algo específico?"
				className={styles.input}
			/>
			<button className={styles.btn}>
				<Image src={searchSVG} alt="Search" />
			</button>
		</div>
	);
}
