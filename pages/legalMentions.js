import Link from "next/link";
import React from "react";
import styles from "../styles/Docu.module.scss";
import Circle from "../public/svg/circle.svg";
import Image from "next/image";

export default function legalMentions() {
	return (
		<main style={{ margin: "3rem", lineHeight: "1.5rem" }}>
			<div>
				<h1 className={styles.title1}>Mention légales du site Untel-official.com</h1>
			</div>
			<div>
				<div className={styles.titleContainer}>
					<Circle />
					<h2 style={{ marginLeft: "1rem" }} className={styles.title2}>
						Editeur
					</h2>
				</div>
				<div>
					<p>Le site www.untel-officiel.fr est édité et codé par Nicolas Maillols</p>
					<p>
						vous remarquez une anomalie ou un bug sur le site ? envoyer nous un message via notre{" "}
						<Link passHref={true} href="/contact">
							<span className={styles.contactSpan}>formulaire de contact</span>
						</Link>
					</p>
				</div>
				<div>
					<div className={styles.titleContainer}>
						<Circle />
						<h2 style={{ marginLeft: "1rem" }} className={styles.title2}>
							Directeur de la publication
						</h2>
					</div>
					<div>
						<p>Monsieur Louis Bourgeois</p>
						<span className={styles.contactSpan}>
							<a href="mailto:untel.officiel@outlook.com">untel.officiel@outlook.com</a>
						</span>
					</div>
				</div>
				<div>
					<div className={styles.titleContainer}>
						<Circle />
						<h2 style={{ marginLeft: "1rem" }} className={styles.title2}>
							Hébergeur
						</h2>
					</div>
					<div>
						<p>
							Ce site est hébergé par : <br />
							IONOS by 1&1 <br /> Ayant son siège social à Elgendorfer Str. 57 56410 Montabaurg <br />
							Uid: 79241445
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
