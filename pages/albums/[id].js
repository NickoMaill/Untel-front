import React from "react";
import Youtube from "../../components/Youtube";

export default function AlbumDetails({ album }) {
	return (
		<main>
			<section>
				<div style={{display:"flex", alignItems:"center"}}>
					<img style={{width:"20%", marginRight:20}} src={`http://localhost:8000/${album.photo_path}`} alt="" />
					<h2>{`${album.title} (${album.year})`}</h2>
				</div>
				<div>
					<p>{album.description}</p>
					<Youtube src={album.video_link}/>
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

console.log("hello");

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
