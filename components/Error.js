import React from "react";
import styles from "../styles/AlbumPages.module.scss";
import ErrorIcon from "../public/svg/error.svg";
import { useRouter } from "next/router";

export default function Error({ children, title }) {
	const router = useRouter();
	const navigate = () => {
		router.push("/");
	};

	return (
		<div style={{ marginTop: 35 }}>
			<div className={styles.titleOrder}>
				<div>
					<ErrorIcon />
				</div>
				<div>
					<h1 className={styles.orderSuccess}>{title}</h1>
				</div>
			</div>
			<div className={styles.orderMessage}>
				<span className={styles.spanOrder}>{children}</span>
				<div className={styles.borderDiv}>
					<div className={styles.coloredDiv}>
						<button onClick={() => navigate()} className={styles.purchaseButton}>
							Retourner à l&apos;accueil
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
