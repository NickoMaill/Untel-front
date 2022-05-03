import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { login } from "../utils/login";
import AlbumSettings from "../components/AlbumSettings";

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
	return {
		props: {
			data,
		},
	};
};

export default function admin({ data }) {
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
			{!isAdminLogged ? (
				<section>
					<form
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<label htmlFor="password">Entrez votre clé admin</label>
						<input type="password" onChange={(e) => setPassword(e.target.value)} name="password" />
						<input type="button" value="se connecter" onClick={authentication} />
					</form>
				</section>
			) : (
				<section>
					<div>
						<div>
							<h3>Bienvenue</h3>
							<h4>sur votre espace administrateur</h4>
						</div>
						<div>
							<p>
								Ici vous pouvez modifier certains contenue de votre site comme les photos, ajouté des
								albums ou vos prochaines dates
							</p>
							<p>
								pour tout autre changement non répertorié dans votre espace veuillez contacter le
								développeur en charge du site
							</p>
						</div>
					</div>
					<div>
						<h5>Modifier vos albums</h5>
						<div>
                            {data.albums.map((album, i) => {
                                return <AlbumSettings
                                key={i}
                                title={album.title}
                                subtitle={album.subtitle}
                                releaseYear={album.year}
                                description={album.description}
                                playlist={album.playlist_link}
                                youtube={album.video_link}
                                isReleased={album.is_released}
                                albumCover={album.photos_paths}
                                />
                            })}
                        </div>
					</div>
				</section>
			)}
		</main>
	);
}
