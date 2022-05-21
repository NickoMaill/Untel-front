import React from "react";
import styles from "../styles/Docu.module.scss"

export default function mediaCredits() {
	return (
		<main style={{ margin: "3rem", lineHeight: "1.5rem" }}>
			<div>
				<h1 className={styles.title1}>Crédits photo et vidéo</h1>
			</div>
			<div>
				<div><h2 className={styles.title2}>Photos</h2></div>
				<div>
					<span>
						<ul className={styles.groupList}>
							<li className={styles.list}>
								<a href="https://elodieroyphotographe-69.webself.net/">Elodie Roy</a>
							</li>
							<li className={styles.list}>
								<a href="https://www.instagram.com/atiadaily/" target="_blank" rel="noreferrer">
									Atia Cakil
								</a>
							</li>
						</ul>
					</span>
				</div>
			</div>
		</main>
	);
}
