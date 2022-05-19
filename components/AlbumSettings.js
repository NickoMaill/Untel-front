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
	price,
	setList,
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
	const [priceAlbum, setPriceAlbum] = useState(price);
	const [trackListAlbum, setTrackListAlbum] = useState(setList) || []
	const [currentSong, setCurrentSong] = useState({});
	const [isUpdated, setIsUpdated] = useState(false);

	const addTrack = () => {

		if (currentSong.track === "") {
			console.error("vous devez rentrez un nom de chanson");
			return;
		}

		if (trackListAlbum !== null) {
			
			if (trackListAlbum.findIndex((i) => i.trackNumber === currentSong.trackNumber) > -1) {
				console.error("chanson déjà a jouter supprimer la pour la modifier");
				return;
			} else {
				setTrackListAlbum((prevState) => [...prevState, currentSong]);
			}
		} else {
			setTrackListAlbum(currentSong)
		}

	};

	const deleteTrack = (index) => {
		setTrackListAlbum((prevState) => prevState.filter((trackListAlbum, i) => i !== index));
	};

	const updateAlbum = (event, type) => {
		event.preventDefault();
		setIsUpdated(true);
		let url;
		let method;
		const sortedTrackList = JSON.stringify(trackListAlbum.sort((a, b) => (a.trackNumber > b.trackNumber ? 1 : -1)));

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
		formData.append("price", priceAlbum);
		formData.append("setList", sortedTrackList);

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
						<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
					<div className={styles.formDetails}>
						<label>Prix de l&apos;album</label>
						<input
							type="text"
							className={styles.input}
							onChange={(e) => setPriceAlbum(e.target.value)}
							defaultValue={price}
							placeholder="prix en euro TTC"
						/>
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
						<div>
							<div style={{ marginTop: 30 }}>
								<label>Ajouter/modifier la tliste des chansons</label>
								<div>
									<input
										className={styles.input}
										style={{ width: 45 }}
										onChange={(e) =>
											setCurrentSong((prevState) => ({
												...prevState,
												trackNumber: parseInt(e.target.value),
											}))
										}
										placeholder="n°"
										type="text"
										maxLength={3}
									/>
									<input
										className={styles.input}
										onChange={(e) =>
											setCurrentSong((prevState) => ({ ...prevState, track: e.target.value }))
										}
										placeholder="titre de la chanson"
										type="text"
									/>
									<button type="button" className={styles.deleteButton} onClick={addTrack}>
										ajouter
									</button>
								</div>
							</div>
							{trackListAlbum && (
								<div>
									<ul>
										{trackListAlbum.map((item, i) => {
											return (
												<li key={i} className={styles.trackContainer}>
													<p style={{ marginRight: "1rem" }}>{item.trackNumber} - </p>
													<span>{item.track}</span>
													<button
														className={styles.deleteButton}
														onClick={() => deleteTrack(i)}
														type="button"
													>
														x
													</button>
												</li>
											);
										})}
									</ul>
								</div>
							)}
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
