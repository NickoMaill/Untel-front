import Album from "../components/Album";
import Video from "../components/Video";
import Gig from "../components/Gig";
import styles from "../styles/Home.module.scss";
import PhotoGallery from "../components/PhotoGallery";
import loadable from "@loadable/component";
import InstaGrid from "../components/InstaGrid";

export const getStaticProps = async () => {
	const data = await fetch("http://localhost:8000/", {
		method: "GET",
		mode: "cors",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		credentials: "include",
	}).then((res) => res.json());


	const instaPost = await fetch("http://localhost:8000/instagram", {
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
			data,
			instaPost,
		},
	};
};

const Youtube = loadable(() => import("../components/Youtube"), {
	fallback: <span className={styles.spinner}></span>,
});

export default function Homepage({ data, instaPost }) {
	return (
		<main>
			<Video source="/video/montage.mp4" />
			<div className={styles.coloredDiv}>
				<h2 className={styles.title}>UNTEL</h2>
			</div>
			<section className={styles.albumContainer} style={{ display: "flex", justifyContent: "center" }}>
				{data.albums.map((album, i) => {
					return (
						<Album
							key={i}
							alt={album.title}
							year={album.year}
							title={album.title}
							subtitle={album.subtitle}
							src={`http://localhost:8000/${album.photo_path}`}
							href={album.album_id}
						>
							{album.title}
						</Album>
					);
				})}
			</section>
			<section className={styles.instaContainer}>
				<div className={styles.postsContainer}>
					<InstaGrid posts={instaPost}/>
				</div>
			</section>
			<section className={styles.youtubeContainer}>
				<Youtube src="https://www.youtube.com/embed/1JbqsjB4qPg" />
				<Youtube src="https://www.youtube.com/embed/fyi2exJt24U" />
			</section>
			<section className={styles.gigContainer}>
				<Gig data={data} />
			</section>
			<section>
				<PhotoGallery />
			</section>
		</main>
	);
}
