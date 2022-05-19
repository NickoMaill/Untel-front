import React from "react";
import AlbumSettings from "../../components/AlbumSettings";
import styles from "../../styles/AlbumSettings.module.scss"
import Link from "next/link";

export default function addAlbum() {
	return (
		<main>
			<h1>Ajouter un album</h1>
			<h3>vous pouvez ajouter un album ici</h3>
			<p>
				Dans cette section vous avez la possibilité d&apos;ajouter un album et même de prévoir la sortie du
				prochain, il vous suffit de cocher &quot;Non&quot; pour donner un style particulier a la vignette de de
				ce dernier
			</p>
			<Link passHref={true} href="/admin">
				<button className={styles.button}>Revenir a votre espace admin</button>
			</Link>
			<section>
				<AlbumSettings
					title=""
					subtitle=""
					releaseYear=""
					description=""
					playlist=""
					youtube=""
					isReleased=""
					color="#000000"
					price=""
					setList={[]}
					requestType="add"
				/>
			</section>
		</main>
	);
}
