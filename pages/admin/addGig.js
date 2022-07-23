import React from "react";
import Link from "next/link";
import styles from "../../styles/AlbumSettings.module.scss";
import GigSetting from "../../components/GigSetting";

export default function addGig() {
	return (
		<main>
			<h1>Ajouter une date</h1>
			<h2>Vous pouvez ajouter vos dates ici</h2>
			<p>
				Dans cette section vous avez la possibilité d&apos;ajouter une date de concert, une fois que la date de
				concert sera passée elle sera passé en gris sur votre page d&apos;accueil pour signifier qu&apos;elle est
				déjà passée{" "}
			</p>
			<Link passHref={true} href="/admin">
				<button className={styles.button}>Revenir a votre espace admin</button>
			</Link>
			<section>
				<GigSetting place="" address="" city="" country="" date="" eventLink="" request="POST" />
			</section>
		</main>
	);
}
