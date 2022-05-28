import { useState } from "react";
import { useSnackbar } from "notistack";
import Image from "next/image";
import Modal from "../components/Modal";
import styles from "../styles/AlbumSettings.module.scss";

export default function AlbumSettings({
	title,
	subtitle,
	releaseDate,
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
	qobuz,
	stream,
}) {
	const { enqueueSnackbar } = useSnackbar();
	const [titleAlbum, setTitleAlbum] = useState(title);
	const [subtitleAlbum, setSubtitleAlbum] = useState(subtitle);
	const [releaseDateAlbum, setReleaseDateAlbum] = useState(releaseDate);
	const [descriptionAlbum, setDescriptionAlbum] = useState(description);
	const [playlistLinkAlbum, setPlaylistLinkAlbum] = useState(playlist);
	const [videoLinkAlbum, setVideoLinkAlbum] = useState(youtube);
	const [photoPathAlbum, setPhotoPathAlbum] = useState(albumCover);
	const [colorAlbum, setColorAlbum] = useState(color);
	const [isReleasedAlbum, setIsReleasedAlbum] = useState(isReleased);
	const [priceAlbum, setPriceAlbum] = useState(price);
	const [currentSong, setCurrentSong] = useState({});
	const [trackListAlbum, setTrackListAlbum] = useState(setList) || [];
	const [shopLink, setShopLink] = useState(qobuz);
	const [currentStream, setCurrentStream] = useState({});
	const [streamLinks, setStreamLinks] = useState(stream) || [];
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(!isOpen);
	};

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
			setTrackListAlbum(currentSong);
		}
	};

	const deleteTrack = (index) => {
		setTrackListAlbum((prevState) => prevState.filter((trackListAlbum, i) => i !== index));
	};

	const addStreamLink = () => {
		if (currentStream.nameTrack === "" || currentStream.link === "") {
			console.error("vous devez rentrez ou selectioner un lien");
			return;
		}

		if (streamLinks.length > 0) {
			if (streamLinks.findIndex((i) => i.nameLink === currentStream.nameLink) > -1) {
				console.error("lien déjà ajouter, supprimer le pour le modifier");
				return;
			} else {
				setStreamLinks((prevState) => [...prevState, currentStream]);
				console.log("ajouté");
			}
		} else {
			console.log("ajouté");
			setStreamLinks((prevState) => [...prevState, currentStream]);
			// setStreamLinks([currentStream]);
		}
	};

	const deleteStreamLink = (index) => {
		setStreamLinks((prevState) => prevState.filter((streamLinks, i) => i !== index));
	};

	const updateOrAddAlbum = (event, type) => {
		event.preventDefault();
		setIsUpdated(true);
		let url;
		let method;
		let sortedTrackList;
		let sortedNameLink;

		if (trackListAlbum.length > 0) {
			sortedTrackList = JSON.stringify(trackListAlbum.sort((a, b) => (a.trackNumber > b.trackNumber ? 1 : -1)));
		}

		if (streamLinks.length > 0) {
			sortedNameLink = JSON.stringify(streamLinks.sort((a, b) => (a.nameLink > b.nameLink ? 1 : -1)));
		}

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
		formData.append("releaseDate", releaseDateAlbum);
		formData.append("description", descriptionAlbum);
		formData.append("playlistLink", playlistLinkAlbum);
		formData.append("videoLink", videoLinkAlbum);
		formData.append("image", photoPathAlbum);
		formData.append("color", colorAlbum);
		formData.append("isReleased", isReleasedAlbum);
		formData.append("price", priceAlbum);
		formData.append("setList", sortedTrackList);
		formData.append("shopLink", shopLink);
		formData.append("streamLinks", sortedNameLink);

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

					return;
				} else {
					enqueueSnackbar("Album mis à jour", {
						variant: "success",
					});
				}
			})
			.catch((err) => console.error(err));
	};

	const formatDate = (dateAlbum) => {
		const newDate = new Date(dateAlbum);

		const date = {
			year: newDate.getFullYear().toString(),
			month:
				newDate.getMonth().toString().length < 2
					? "0" + newDate.getMonth().toString()
					: newDate.getMonth().toString(),
			day:
				newDate.getDate().toString().length < 2
					? "0" + newDate.getDate().toString()
					: newDate.getDate().toString(),
			hours:
				newDate.getHours().toString().length < 2
					? "0" + newDate.getHours().toString()
					: newDate.getHours().toString(),
			minutes:
				newDate.getMinutes().toString().length < 2
					? "0" + newDate.getMinutes().toString()
					: newDate.getMinutes().toString(),
			seconds:
				newDate.getSeconds().toString().length < 2
					? "0" + newDate.getSeconds().toString()
					: newDate.getSeconds().toString(),
		};

		return `${date.day}/${date.month}/${date.year}`;
	};

	const deleteAlbum = () => {
		setIsUpdated(true);
		fetch(`http://localhost:8000/albums/delete/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((res) => {
				if (!res.success) {
					enqueueSnackbar("une erreur s'est produite...", {
						variant: "error",
					});
				} else {
					enqueueSnackbar("album correctement supprimé", {
						variant: "warning",
					});
				}
			})

			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
			<form
				onSubmit={(e) => updateOrAddAlbum(e, requestType)}
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
						<label htmlFor="releaseDate">Date de sortie</label>
						<input
							className={styles.input}
							placeholder="année de sortie"
							defaultValue={releaseDateAlbum}
							name="releaseDate"
							type="date"
							onChange={(e) => setReleaseDateAlbum(e.target.value)}
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
					<div className={styles.formDetails}>
						<label htmlFor="youtube">Qobuz</label>
						<input
							className={styles.input}
							defaultValue={qobuz}
							placeholder="lien achat qobuz"
							name="youtube"
							type="text"
							onChange={(e) => setShopLink(e.target.value)}
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
						<div
							style={{
								display: "flex",
								justifyContent: "space-around",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<Image
								style={{ width: 200 }}
								width={200}
								height={200}
								src={`http://localhost:8000/${albumCover}`}
								alt={`photo de couveture de ${title}`}
							/>
							<div className={styles.streaming}>
								<label>Sélectionnez vos plateforme</label>
								<div>
									<div>
										<select
											onChange={(e) =>
												setCurrentStream((prevState) => ({
													...prevState,
													nameLink: e.target.value,
												}))
											}
											className={styles.input}
											defaultValue=""
										>
											<option value="" disabled key="1">
												-- plateforme --
											</option>
											<option value="spotify" key="2">
												Spotify
											</option>
											<option value="appleMusic" key="3">
												Apple Music
											</option>
											<option value="deezer" key="4">
												Deezer
											</option>
										</select>
										<input
											onChange={(e) =>
												setCurrentStream((prevState) => ({
													...prevState,
													link: e.target.value,
												}))
											}
											className={styles.input}
											type="text"
											placeholder="lien de l'album"
										/>
										<button type="button" onClick={addStreamLink}>
											ajouter
										</button>
									</div>

									{streamLinks && (
										<div>
											<ul>
												{streamLinks.map((link, i) => {
													return (
														<li key={i} className={styles.trackContainer}>
															<p>{link.nameLink}</p>
															<button
																className={styles.deleteButton}
																type="button"
																onClick={() => deleteStreamLink(i)}
															>
																X
															</button>
														</li>
													);
												})}
											</ul>
										</div>
									)}
								</div>
							</div>
						</div>
					)}
				</div>
				<div style={{ display: "flex", justifyContent: "space-around", marginTop: 70 }}>
					{requestType === "update" ? (
						<button className={styles.button} onClick={openModal} type="button">
							Supprimer L&apos;album
						</button>
					) : (
						<></>
					)}
					<input
						className={styles.button}
						value={requestType === "add" ? "Ajouter l'album" : "Modifier l'album"}
						type="submit"
					/>
					<Modal open={isOpen} onClick={openModal}>
						<div
							style={{
								backgroundColor: "#f1f1f1",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								width: "100%",
								padding: 50,
							}}
						>
							Etes-vous sûr ?
							<button className={styles.button} onClick={() => deleteAlbum(id)} type="button">
								Supprimer L&apos;album
							</button>
						</div>
					</Modal>
				</div>
			</form>
		</div>
	);
}
