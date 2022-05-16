import React from "react";
import Playlist from "../../components/Playlist";
import Youtube from "../../components/Youtube";
import styles from "../../styles/AlbumPages.module.scss";

export default function AlbumDetails({ album }) {
	// const formatDescription = [album.description].map((i) => i.replace(/\n/g, "<br/>")).join("");
	return (
		<main>
			<section>
				<div className={styles.title}>
					<h2>{`${album.title} (${album.year})`}</h2>
					<img className={styles.img} src={`http://localhost:8000/${album.photo_path}`} alt="" />
				</div>
				<div>
					<p style={{whiteSpace:"pre-line"}}>{album.description}</p>
					<div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
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
		"Cache-Control": "max-age=10000000000000000000000",
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
		"Cache-Control": "max-age=10000000000000000000000",
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
