import Album from "../components/Album";
import Video from "../components/Video";
import Gig from "../components/Gig";
import styles from "../styles/Home.module.scss";
import PhotoGallery from "../components/PhotoGallery";
import InstaGrid from "../components/InstaGrid";
import Youtube from "../components/Youtube"

export const getStaticProps = async () => {
	const data = await fetch("http://localhost:8000/api/", {
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

	const instaPost = await fetch("http://localhost:8000/api/instagram", {
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
			data,
			instaPost,
		},
	};
};

export default function Homepage({ data, instaPost }) {
	return (
		<main>
			<Video source="/video/montage.mp4" />
			<div className={styles.coloredDiv}>
				<h2 className={styles.title}>UNTEL</h2>
			</div>
			<section className={styles.albumContainer}>
				{data.albums.map((album, i) => {
					return (
						<Album
							key={i}
							alt={album.title}
							releaseDate={album.release_date}
							title={album.title}
							subtitle={album.subtitle}
							src={`http://localhost:8000/${album.photo_path}`}
							href={album.album_id}
							isReleased={album.is_released}
						>
							{album.title}
						</Album>
					);
				})}
			</section>
			<section className={styles.instaContainer}>
				<div className={styles.postsSection}>
					<InstaGrid posts={instaPost} />
				</div>
			</section>
			<section className={styles.youtubeContainer}>
				<Youtube src="https://www.youtube.com/embed/1JbqsjB4qPg" />
				<Youtube src="https://www.youtube.com/embed/fyi2exJt24U" />
			</section>
			<section className={styles.gigSection}>
				<Gig data={data} />
			</section>
			<section>
				<PhotoGallery />
			</section>
		</main>
	);
}
