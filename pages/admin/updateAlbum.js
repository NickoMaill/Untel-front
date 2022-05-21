import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { login } from "../../utils/login";
import AlbumSettings from "../../components/AlbumSettings";
import Link from "next/link";
import styles from "../../styles/AlbumSettings.module.scss"

export const getStaticProps = async () => {
	const data = await fetch("http://localhost:8000/", {
		method: "GET",
		mode: "cors",
		headers: {
			"Cache-Control": "max-age=10000000000000000000000",
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		credentials: "include",
	}).then((res) => res.json());
	return {
		props: {
			data,
		},
	};
};

export default function UpdateAlbum({ data }) {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
	const [isAdminLogged, setIsAdminLogged] = useState(false);
	const [password, setPassword] = useState("");

	const authentication = () => {
		login({ password }).then((res) => {
			if (!res.goodPassword) {
				enqueueSnackbar("Mauvais mot de passe", {
					variant: "error",
				});
			} else {
				enqueueSnackbar("Bienvenue sur votre interface Admin", {
					variant: "success",
				});
				setIsAdminLogged(true);
			}
		});
	};

	return (
		<main>
			<section>
				<div style={{display:"flex", flexDirection:"column"}}>
					<div style={{textAlign:"center"}}>
						<h3>Bienvenue</h3>
						<h4>sur votre espace administrateur</h4>
					</div>
					<div style={{textAlign:"center"}}>
						<p>
							Ici vous pouvez modifier certains contenue de votre site comme les photos, ajouté des albums
							ou vos prochaines dates
						</p>
						<p>
							pour tout autre changement non répertorié dans votre espace veuillez contacter le
							développeur en charge du site
						</p>
					</div>
				</div>
					<Link passHref={true} href="/admin">
						<button className={styles.button}>Revenir a votre espace admin</button>
					</Link>
				<div style={{display:"flex", flexDirection:"column"}}>
					<h5 style={{textAlign:"center"}}>Modifier vos albums</h5>
						{data.albums.map((album, i) => {
							return (
								<AlbumSettings
									key={i}
									title={album.title}
									subtitle={album.subtitle}
									releaseYear={album.year}
									description={album.description}
									playlist={album.playlist_link}
									youtube={album.video_link}
									isReleased={album.is_released}
									albumCover={album.photo_path}
									color={album.color}
									id={album.album_id}
									price={album.price}
									setList={album.track_list !== null ? album.track_list : []}
									stream={album.stream_links !== null ? album.stream_links : []}
									requestType="update"
								/>
							);
						})}
				</div>
			</section>
		</main>
	);
}
