"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import backSVG from "../../assets/back.svg";
import styles from "./styles.module.css";

export function BackButton() {
	const router = useRouter();

	return (
		<button onClick={() => router.back()} className={styles.backBtn}>
			<Image alt="" src={backSVG} />
			<span>Voltar</span>
		</button>
	);
}
