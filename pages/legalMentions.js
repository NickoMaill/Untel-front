import React from "react";
import styles from "../styles/Docu.module.scss"

export default function legalMentions() {
	return (
		<main style={{ margin: "3rem", lineHeight: "1.5rem" }}>
			<div>
				<h1 className={styles.title1}>Mention légales du site Untel-official.com</h1>
			</div>
			<div>
				<div>
					<h2 className={styles.title2}>Editeur</h2>
				</div>
				<div>
					<p>Le site www.untel-officiel.fr est édité par Nicolas Maillols</p>
				</div>
				<div>
					<div>
						<h2 className={styles.title2}>Directeur de la publication</h2>
					</div>
					<div>
						<p>Monsieur Louis Bourgeois</p>
					</div>
				</div>
                <div>
                    <div>
                        <h2 className={styles.title2}>Hébergeur</h2>
                        </div>
                    <div>
                        <p>Ce site est hébergé par :</p>
                    </div>
                </div>
			</div>
		</main>
	);
}
