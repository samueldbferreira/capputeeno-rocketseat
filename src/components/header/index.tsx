import Image from "next/image";
import logoSVG from "../../assets/logo.svg";
import styles from "./styles.module.css";
import { SearchBar } from "./searchBar";
import { BagButton } from "./bagButton";
import Link from "next/link";

export function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<Link href="/">
					<Image src={logoSVG} alt="Capputeeno" />
				</Link>

				<div className={styles.itemsRight}>
					<SearchBar />
					<BagButton />
				</div>
			</div>
		</header>
	);
}
