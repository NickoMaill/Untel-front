// LIBRARY IMPORT
import loadable from "@loadable/component";
import Image from "next/image";

// COMPONENTS IMPORT
import Playlist from "../../components/Playlist";
import PaypalButton from "../../components/PaypalButton";

// SVG IPORT
import Qobuz from "../../public/svg/qobuz.svg";
import Spotify from "../../public/svg/spotify.svg";
import Deezer from "../../public/svg/deezer.svg";
import AppleMusic from "../../public/svg/appleMusic.svg";

// STYLES IMPORT
import styles from "../../styles/AlbumPages.module.scss";

// LAZY LOAD IFRAME
const Youtube = loadable(() => import("../../components/Youtube"), {
	fallback: <span className={styles.spinner}></span>,
});

export default function AlbumDetails({ album }) {
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
									layout="fixed"
									height={384}
									width={384}
									src={`http://localhost:8000/${album.photo_path}`}
									alt={`photo de l'album ${album.title} de l'artiste untel`}
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
									}}
								>
									<span>vous le voulez en version physique ? c&apos;est possible !</span>
								</div>
								<div>
									<PaypalButton
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
							<p style={{ whiteSpace: "pre-line", fontSize: "1.1rem" }}>{album.description}</p>
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
						<Playlist src={album.playlist_link} />
					</div>
				</div>
			</section>
		</main>
	);
}

export async function getStaticProps({ params }) {
	const album = await fetch(`http://localhost:8000/albums/${params.id}`, {
		method: "GET",
		mode: "cors",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		credentials: "include",
	}).then((res) => res.json());
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
	}).then((res) => res.json());
	return {
		paths: data.albums.map((album) => ({
			params: { id: album.album_id.toString() },
		})),
		fallback: false,
	};
}
