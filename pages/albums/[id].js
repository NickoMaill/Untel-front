import React from "react";
import Playlist from "../../components/Playlist";
import Youtube from "../../components/Youtube";
import styles from "../../styles/AlbumPages.module.scss";
import PaypalButton from "../../components/PaypalButton";

export default function AlbumDetails({ album }) {
	console.log(album);
	const handleToken = (token, address) => {
		console.log(token, address);
	};

	const formaHtml = (string) => {
		const formatDescription = [string].map((i) => i.replace(/"/g, "")).join("");
		return formatDescription;
	};

	return (
		<main className={styles.main} style={{ background: `radial-gradient( #c7c8d0, ${album.color})` }}>
			<section>
				<div className={styles.title}>
					<div style={{ margin: "2rem 0rem 4rem 0rem" }}>
						<h2>{`${album.title} (${album.year})`}</h2>
					</div>
					<div className={styles.albumInfo}>
						<img className={styles.img} src={`http://localhost:8000/${album.photo_path}`} alt="" />
						<div className={styles.trackListContainer}>
							<div>
								<ul style={{ marginTop: 30 }}>
									{album.track_list.map((track, i) => (
										<li style={{ marginBottom: 30, display: "flex" }} key={i}>
											<p style={{ marginRight: 20 }}>{track.trackNumber} - </p>
											<p>{track.track}</p>
										</li>
									))}
								</ul>
							</div>
							<div style={{ zIndex: "0" }}>
								<a href="" target="_blank" rel="noreferrer">
									<button className={styles.qobuz}>
										<img src="/svg/qobuz.svg" style={{ width: 100 }} alt="" />
									</button>
								</a>
								<span>vous le voulez en version physique ? c'est possible !</span>
								<PaypalButton
									value={album.price}
									reference_id={album.album_id}
									description={album.title + " " + album.subtitle}
								/>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className={styles.corpusContainer}>
						<div className={styles.textContainer}>
							<p style={{ whiteSpace: "pre-line" }}>{album.description}</p>
						</div>
					</div>
					<div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
						<Youtube src={album.video_link} />
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
