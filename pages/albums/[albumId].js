// LIBRARY IMPORT
import loadable from "@loadable/component";
import Image from "next/image";
import dynamic from "next/dynamic";
import { createRef, useContext, useEffect, useState } from "react";

// CONTEXT IMPORT
import AppContext from "../../context/state";

// COMPONENTS IMPORT
// import Playlist from "../../components/Playlist";
import PaypalButton from "../../components/PaypalButton";

// SVG IPORT
import Qobuz from "../../public/svg/qobuz.svg";
import Spotify from "../../public/svg/spotify.svg";
import Deezer from "../../public/svg/deezer.svg";
import AppleMusic from "../../public/svg/appleMusic.svg";

// STYLES IMPORT
import styles from "../../styles/AlbumPages.module.scss";

// LAZY LOAD IFRAME
const Youtube = dynamic(() => import("../../components/Youtube"), {
	ssr: false,
	fallback: <span className={styles.spinner}></span>,
});

const Playlist = dynamic(() => import("../../components/Playlist"), {
	ssr: false,
	fallback: <span className={styles.spinner}></span>,
});

export default function AlbumDetails({ album }) {
	const Context = useContext(AppContext);
	const [isVisible, setIsVisible] = useState(false);
	const [number, setNumber] = useState(album.description.length);
	const slicedText = album.description.substring(0, number);
	console.log(isVisible);
	const showText = () => {
		setIsVisible(!isVisible);
	};

	useEffect(() => {
		if (Context.screenWidth <= 540) {
			setNumber(297);
			setIsVisible(false);
		} else {
			setIsVisible(true);
			setNumber(album.description.length);
		}
	}, [Context.screenWidth]);

	useEffect(() => {
		if (isVisible === true) {
			setNumber(album.description.length);
		} else {
			setNumber(297);
		}
	}, [isVisible]);

	return (
		<main className={styles.main} style={{ background: `radial-gradient( #c7c8d0, ${album.color})` }}>
			<section>
				<div className={styles.title}>
					<div style={{ margin: "2rem 0rem 4rem 0rem" }}>
						<h2>{`${album.title} (${album.year})`}</h2>
					</div>
					<div className={styles.albumInfo}>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<div className={styles.img}>
								<Image
									loading="lazy"
									height={450}
									width={450}
									src={`http://localhost:8000/${album.photo_path}`}
									alt={`photo de l'album ${album.title} de l'artiste untel`}
									placeholder="blur"
									blurDataURL="https://search.brave.com/images?q=blur+white+%26+black+&source=web#6"
								/>
							</div>
							<p style={{ textAlign: "center", fontStyle: "italic" }}>
								* prix pour un album en version physique
							</p>
							<div className={styles.priceContainer}>
								<p className={styles.price}>
									<strong>{album.price} €*</strong>
								</p>
							</div>
						</div>
						<div className={styles.trackListContainer}>
							<div>
								<ul style={{ marginTop: 30 }}>
									{album.track_list.map((track, i) => (
										<li style={{ marginBottom: 15, display: "flex" }} key={i}>
											<p style={{ marginRight: 20 }}>{track.trackNumber} - </p>
											<p>{track.track}</p>
										</li>
									))}
								</ul>
							</div>
							<div style={{ zIndex: "0" }}>
								{/* qobuz button */}
								<a href={album.shop_link} title="lien d'achat qobuz" target="_blank" rel="noreferrer">
									<button className={styles.qobuz}>
										<div title="bouton d'achat Qobuz">
											<Qobuz />
										</div>
									</button>
								</a>
								<div>
									<ul className={styles.streamContainer}>
										{album.stream_links.map((link, i) => {
											return (
												<li className={styles.streamIcon} key={i}>
													<a target="_blank" rel="noreferrer" href={link.link}>
														<div title={`bouton de streaming ${link.nameLink}`}>
															{link.nameLink === "spotify" && <Spotify />}
															{link.nameLink === "deezer" && <Deezer />}
															{link.nameLink === "appleMusic" && <AppleMusic />}
														</div>
													</a>
												</li>
											);
										})}
									</ul>
								</div>
								<div
									style={{
										margin: "50px 0px 10px 0px",
										display: "flex",
										justifyContent: "center",
										fontStyle: "italic",
										textAlign: "center",
									}}
								>
									<span>vous le voulez en version physique ? c&apos;est possible !</span>
								</div>
								<div>
									<PaypalButton
										className={styles.paypalButton}
										value={album.price}
										reference_id={album.album_id}
										description={album.title + " " + album.subtitle}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div>
					<div className={styles.corpusContainer}>
						<div className={styles.textContainer}>
							<p style={{ whiteSpace: "pre-line", fontSize: "1.1rem" }}>{slicedText}</p>
							<div>
								<button className={styles.hideButton} onClick={showText}>
									{isVisible ? "masquer" : "afficher"}
								</button>
							</div>
						</div>
						<Youtube src={album.video_link} />
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-around",
							alignItems: "center",
							marginBottom: 50,
						}}
					>
						<Playlist className={styles.playlist} src={album.playlist_link} />
					</div>
				</div>
			</section>
		</main>
	);
}

export async function getStaticProps({ params }) {
	const album = await fetch(`http://localhost:8000/albums/${params.albumId}`, {
		method: "GET",
		mode: "cors",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		credentials: "include",
	})
		.then((res) => res.json())
		.catch((err) => console.error(err));
	return {
		props: {
			album: album.album[0],
		},
	};
}

export async function getStaticPaths() {
	const data = await fetch("http://localhost:8000/albums/all", {
		method: "GET",
		mode: "cors",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		credentials: "include",
	})
		.then((res) => res.json())
		.catch((err) => console.error(err));
	return {
		paths: data.albums.map((album) => ({
			params: { albumId: album.album_id.toString() },
		})),
		fallback: false,
	};
}
