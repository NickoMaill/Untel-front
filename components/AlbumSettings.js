import React from "react";
import styles from "../styles/AlbumSettings.module.scss";

export default function AlbumSettings({
	title,
	subtitle,
	releaseYear,
	description,
	playlist,
	youtube,
	isReleased,
	albumCover,
}) {
	return (
		<div style={{ display: "flex", margin:4 }}>
			<form style={{ display: "flex", flexDirection: "column", width: "50%" }}>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div className={styles.formDetails}>
						<label htmlFor="title">Titre</label>
						<input className={styles.input} placeholder="le titre de l'album" defaultValue={title} name="title" type="text" />
					</div>
					<div className={styles.formDetails}>
						<label htmlFor="subtitle">Sous-titre</label>
						<input
                        className={styles.input}
							placeholder="sous-titre de l'album"
							defaultValue={subtitle}
							name="subtitle"
							type="text"
						/>
					</div>
				</div>
				<div style={{ display: "flex", justifyContent: "space-between", alignItems:"center",  }}>
					<div className={styles.formDetails}>
						<label htmlFor="releaseYear">Année</label>
						<input
                        className={styles.input}
							placeholder="année de sortie"
							defaultValue={releaseYear}
							name="releaseYear"
							type="text"
						/>
					</div>
					<div className={styles.formDetails}>
						<label htmlFor="isReleased">Cet album est-il déjà sortis ?</label>
						<div style={{ display: "flex", alignItems:"center"}}>
							<label style={{marginRight:10}} htmlFor="isReleased">Oui</label>
							<input defaultValue={isReleased} name="isReleased" type="radio" />
							<label style={{marginInline:10}} htmlFor="isNotReleased">Non</label>
							<input defaultValue={!isReleased} name="isNotReleased" type="radio" />
						</div>
					</div>
				</div>
				<div className={styles.formDetails2}>
					<label htmlFor="description">Description</label>
					<textarea
                    className={styles.input}
						style={{ width: "100%" }}
						placeholder="décrivez votre album ici"
						rows="10"
						cols="30"
						defaultValue={description}
						name="description"
						type="text"
					/>
				</div>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div className={styles.formDetails}>
						<label htmlFor="playlist">Playlist</label>
						<input className={styles.input} defaultValue={playlist} name="playlist" type="url" />
					</div>
					<div className={styles.formDetails}>
						<label htmlFor="youtube">YouTube</label>
						<input className={styles.input} defaultValue={youtube} name="youtube" type="text" />
					</div>
				</div>
				<div style={{ display: "flex", alignItems: "center", justifyContent:"space-evenly" }}>
					<div style={{display:"flex", flexDirection:"column"}}>
						<label htmlFor="albumCover">Photo de l&apos;album</label>
						<input className={styles.input} name="albumCover" type="file" />
					</div>
					<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
						<img
							style={{ width: 200 }}
							src={`http://localhost:8000/${albumCover}`}
							alt={`photo de couveture de ${title}`}
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
