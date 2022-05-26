import Image from "next/image";
import React from "react";
import styles from "../styles/Docu.module.scss";

export default function mediaCredits() {
	return (
		<main style={{ margin: "3rem", lineHeight: "1.5rem" }}>
			<div>
				<h1 className={styles.title1}>Crédits photo et vidéo</h1>
			</div>
			<div>
				<div>
					<span>  
						<ul className={styles.mediaList}>
							<li className={styles.photoList}>
								<a className={styles.mediaLogo} target="_blank" rel="noreferrer" href="https://elodieroyphotographe-69.webself.net/">
									<Image src="/pictures/royLogo.png" quality={100} width={171} height={50} />   								</a>
							</li>
							<li className={styles.photoList}>
								<a className={styles.mediaLogo} href="https://www.instagram.com/atiadaily/" target="_blank" rel="noreferrer">
								<Image src="/pictures/atiaLogo.png" width={154} height={113} />
								</a>
							</li>
						</ul>
					</span>
				</div>
			</div>
		</main>
	);
}
