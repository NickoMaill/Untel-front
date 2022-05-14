import { useState } from "react";
import { useSnackbar } from "notistack";
import styles from "../styles/AlbumSettings.module.scss";

export default function AlbumSettings({
	title,
	subtitle,
	releaseYear,
	description,
	playlist,
	youtube,
	color,
	isReleased,
	albumCover,
	id,
	requestType,
}) {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const [titleAlbum, setTitleAlbum] = useState(title);
	const [subtitleAlbum, setSubtitleAlbum] = useState(subtitle);
	const [yearAlbum, setYearAlbum] = useState(releaseYear);
	const [descriptionAlbum, setDescriptionAlbum] = useState(description);
	const [playlistLinkAlbum, setPlaylistLinkAlbum] = useState(playlist);
	const [videoLinkAlbum, setVideoLinkAlbum] = useState(youtube);
	const [photoPathAlbum, setPhotoPathAlbum] = useState(albumCover);
	const [colorAlbum, setColorAlbum] = useState(color);
	const [isReleasedAlbum, setIsReleasedAlbum] = useState(isReleased);
	const [isUpdated, setIsUpdated] = useState(false);

	const updateAlbum = (event, type) => {
		event.preventDefault();
		setIsUpdated(true);
		let url;
		let method;

		if (type === "add") {
			url = "http://localhost:8000/albums/add-album";
			method = "POST";
		}

		if (type === "update") {
			url = `http://localhost:8000/albums/update-album/${id}`;
			method = "PUT";
		}

		const formData = new FormData();
		formData.append("title", titleAlbum);
		formData.append("subtitle", subtitleAlbum);
		formData.append("year", yearAlbum);
		formData.append("description", descriptionAlbum);
		formData.append("playlistLink", playlistLinkAlbum);
		formData.append("videoLink", videoLinkAlbum);
		formData.append("image", photoPathAlbum);
		formData.append("color", colorAlbum);
		formData.append("isReleased", isReleasedAlbum);

		fetch(url, {
			method,
			body: formData,
		})
			.then((res) => res.json())
			.then((res) => {
				if (!res.success) {
					enqueueSnackbar("une erreur s'est produite...", {
						variant: "error",
					});
					setIsUpdated(false);
					return;
				} else {
					enqueueSnackbar("Album mis à jour", {
						variant: "success",
					});
					console.log(res);
				}
			})
			.finally(() => {
				setIsUpdated(false);
			})
			.catch((err) => console.error(err));
	};

	return (
		<div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
			<form
				onSubmit={(e) => updateAlbum(e, requestType)}
				className={styles.form}
				style={{ display: "flex", flexDirection: "column", width: "70%", justifyContent: "center" }}
			>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div className={styles.formDetails}>
						<label htmlFor="title">Titre</label>
						<input
							className={styles.input}
							placeholder="le titre de l'album"
							defaultValue={title}
							name="title"
							type="text"
							onChange={(e) => setTitleAlbum(e.target.value)}
						/>
					</div>
					<div className={styles.formDetails}>
						<label htmlFor="subtitle">Sous-titre</label>
						<input
							className={styles.input}
							placeholder="sous-titre de l'album"
							defaultValue={subtitle}
							name="subtitle"
							type="text"
							onChange={(e) => setSubtitleAlbum(e.target.value)}
						/>
					</div>
				</div>
				<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
					<div className={styles.formDetails}>
						<label htmlFor="releaseYear">Année</label>
						<input
							className={styles.input}
							placeholder="année de sortie"
							defaultValue={releaseYear}
							name="releaseYear"
							type="text"
							onChange={(e) => setYearAlbum(e.target.value)}
						/>
					</div>
					<div className={styles.formDetails}>
						<label htmlFor="isReleased">Cet album est-il déjà sortis ?</label>
						<div style={{ display: "flex", alignItems: "center" }}>
							<label style={{ marginRight: 10 }} htmlFor="isReleased">
								Oui
							</label>
							<input
								name="isReleased"
								type="radio"
								onChange={() => setIsReleasedAlbum(true)}
								value={isReleasedAlbum}
								checked={isReleasedAlbum}
							/>
							<label style={{ marginInline: 10 }} htmlFor="isNotReleased">
								Non
							</label>
							<input
								name="isNotReleased"
								type="radio"
								onChange={() => setIsReleasedAlbum(false)}
								value={!isReleasedAlbum}
								checked={!isReleasedAlbum}
							/>
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
						onChange={(e) => setDescriptionAlbum(e.target.value)}
					/>
				</div>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div className={styles.formDetails}>
						<label htmlFor="playlist">Playlist</label>
						<input
							className={styles.input}
							defaultValue={playlist}
							name="playlist"
							type="url"
							placeholder="playlist Spotify"
							onChange={(e) => setPlaylistLinkAlbum(e.target.value)}
						/>
					</div>
					<div className={styles.formDetails}>
						<label htmlFor="youtube">YouTube</label>
						<input
							className={styles.input}
							defaultValue={youtube}
							placeholder="lien youtube"
							name="youtube"
							type="text"
							onChange={(e) => setVideoLinkAlbum(e.target.value)}
						/>
					</div>
				</div>
				<div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div style={{ display: "flex", flexDirection: "column", marginBlock: 20 }}>
							<label htmlFor="image">Photo de l&apos;album</label>
							<input
								className={styles.input}
								name="image"
								type="file"
								onChange={(e) => setPhotoPathAlbum(e.target.files[0])}
							/>
						</div>
						<div>
							<label>Choisissez le thème de couleur </label>
							<div>
								<div style={{ display: "flex", alignItems: "center", marginBlock: 10 }}>
									<input
										type="color"
										style={{ width: 100 }}
										value={colorAlbum}
										onChange={(e) => setColorAlbum(e.target.value)}
									/>
									<span style={{ marginLeft: 20 }}>{colorAlbum}</span>
								</div>
								<button type="button" onClick={() => setColorAlbum(color)}>
									réinitialiser
								</button>
							</div>
						</div>
					</div>
					{albumCover && (
						<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
							<img
								style={{ width: 200 }}
								src={`http://localhost:8000/${albumCover}`}
								alt={`photo de couveture de ${title}`}
							/>
						</div>
					)}
				</div>
				<div style={{ display: "flex", justifyContent: "center", marginTop: 70 }}>
					<input className={styles.button} value="Mettre a jour l'album" type="submit" />
				</div>
			</form>
		</div>
	);
}
