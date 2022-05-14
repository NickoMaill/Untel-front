import React from "react";
import AlbumSettings from "../../components/AlbumSettings";

export default function addAlbum() {
	return (
		<main>
			<h1>Ajouter un album</h1>
			<h3>vous pouvez ajouter un album ici</h3>
			<p>
				Dans cette section vous avez la possibilité d'ajouter un album et même de prévoir la sortie du prochain,
				il vous suffit de cocher "Non" pour donner un style particulier a la vignette de de ce dernier
			</p>
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
					requestType="add"
				/>
			</section>
		</main>
	);
}
