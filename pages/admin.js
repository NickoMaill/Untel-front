import React, { useState } from "react";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { login } from "../utils/login";
import styles from "../styles/Admin.module.scss"

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
	const [validPassword, setValidPassword] = useState(true)

	const authentication = (e) => {
		e.preventDefault()
		
		login({ password }).then((res) => {
			if (!res.goodPassword) {
				enqueueSnackbar("Mauvais mot de passe", {
					variant: "error",
				});
				setValidPassword(false)
			} else {
				enqueueSnackbar("Bienvenue sur votre interface Admin", {
					variant: "success",
				});
				setIsAdminLogged(true);
				setValidPassword(true);
			}
		});
	};

	return (
		<main style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
			{!isAdminLogged ? (
				<section
					
				>
					<form
					onSubmit={(e) => authentication(e)}
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<label htmlFor="password">Entrez votre clé admin</label>
						<input className={!validPassword ? styles.wrongPassword : styles.password} type="password" onChange={(e) => setPassword(e.target.value)} name="password" />
						<input type="submit" value="se connecter" />
					</form>
				</section>
			) : (
				<section
					style={{ display: "flex", flexDirection:"column"}}
				>
					<Link passHref={true} href="/admin/addAlbum">
						<button className={styles.button}>Ajouter un album</button>
					</Link>
					<Link passHref={true} href="/admin/updateAlbum">
						<button className={styles.button}>Modifier un album</button>
					</Link>
					<Link passHref={true} href="/admin/addGig">
						<button className={styles.button}>Ajouter un date</button>
					</Link>
					<Link passHref={true} href="/admin/updateGig">
						<button className={styles.button}>Modifier une date</button>
					</Link>
					<Link passHref={true} href="/admin/addDeletePhotos">
						<button className={styles.button}>Ajouter / supprimer vos photos </button>
					</Link>
					<Link passHref={true} href="/admin/updateVideos">
						<button className={styles.button}>Modifier vidéo</button>
					</Link>
				</section>
			)}
		</main>
	);
}
