import React, { useState } from "react";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { login } from "../utils/login";

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

export default function Admin({ data }) {
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
				<section
					style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
				>
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
				<section
					style={{ display: "flex", alignItems: "center", justifyContent: "center"}}
				>
					<Link href="/admin/addAlbum">
						<button>Ajouter un album</button>
					</Link>
					<Link href="/admin/updateAlbum">
						<button>Modifier un album</button>
					</Link>
					<Link href="/admin/addGig">
						<button>Ajouter un date</button>
					</Link>
					<Link href="/admin/updateGig">
						<button>Modifier une date</button>
					</Link>
					<Link href="/admin/addDeletePhotos">
						<button>Ajouter / supprimer vos photos </button>
					</Link>
					<Link href="/admin/updateVideos">
						<button>Modifier vidéo</button>
					</Link>
				</section>
			)}
		</main>
	);
}
