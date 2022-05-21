import React from "react";
import Playlist from "../../components/Playlist";
import styles from "../../styles/AlbumPages.module.scss";
import PaypalButton from "../../components/PaypalButton";
import loadable from "@loadable/component";
import Image from "next/image";

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
											<Image layout="fixed" loading="lazy" width={125} height={40} src="/svg/qobuz.svg" style={{color:"#ffffff"}} alt="bouton achat qobuz" />
									</button>
								</a>
								<div>
									<ul className={styles.streamContainer}>
										{album.stream_links.map((link, i) => {
											return (
												<li className={styles.streamIcon} key={i}>
													<a target="_blank" rel="noreferrer" href={link.link}>
														<Image loading="lazy" layout="fixed" width={90} height={34} src={`/svg/${link.nameLink}.svg`} alt={`bouton de streaming ${link.nameLink}`} />
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
