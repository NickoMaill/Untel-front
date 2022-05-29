import { useContext, useState } from "react";
import Link from "next/link";
import { useSnackbar } from "notistack";
import { login } from "../utils/login";
import styles from "../styles/Admin.module.scss";
import AppContext from "../context/state";

export default function Admin() {
	const { enqueueSnackbar } = useSnackbar();
	const Context = useContext(AppContext);
	const [password, setPassword] = useState("");
	const [validPassword, setValidPassword] = useState(true);

	const authentication = (e) => {
		e.preventDefault();

		login({ password }).then((res) => {
			if (!res.goodPassword) {
				enqueueSnackbar("Mauvais mot de passe", {
					variant: "error",
				});
				setValidPassword(false);
			} else {
				enqueueSnackbar("Bienvenue sur votre interface Admin", {
					variant: "success",
				});
				Context.setIsAdminLogged(true);
				setValidPassword(true);

				setTimeout(() => {
					Context.setIsAdminSessionExpired(true);
				}, 3600000);
			}
		});
	};

	return (
		<main className={styles.mainAdmin}>
			{!Context.isAdminLogged ? (
				<section>
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
						<input
							className={!validPassword ? styles.wrongPassword : styles.password}
							type="password"
							onChange={(e) => setPassword(e.target.value)}
							name="password"
						/>
						<input type="submit" value="se connecter" />
					</form>
				</section>
			) : !Context.isAdminSessionExpired ? (
				<>
					<section style={{ display: "flex", flexDirection: "column" }}>
						<div style={{ textAlign: "center" }}>
							<h3>Bienvenue</h3>
							<h4>sur votre espace administrateur</h4>
						</div>
						<div style={{ textAlign: "center" }}>
							<p>
								Ici vous pouvez modifier certains contenue de votre site comme les photos, ajouté des
								albums ou vos prochaines dates
							</p>
							<p>
								pour tout autre changement non répertorié dans votre espace veuillez contacter le
								développeur en charge du site
							</p>
						</div>
					</section>
					<section>
						<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
							<Link passHref={true} href="/admin/addAlbum">
								<button className={styles.button}>Ajouter un album</button>
							</Link>
							<Link passHref={true} href="/admin/updateAlbum">
								<button className={styles.button}>Modifier un album</button>
							</Link>
							<Link passHref={true} href="/admin/addGig">
								<button className={styles.button}>Ajouter une date</button>
							</Link>
							<Link passHref={true} href="/admin/updateGig">
								<button className={styles.button}>Modifier une date</button>
							</Link>
							<Link passHref={true} href="/admin/addDeletePhotos">
								<button className={styles.button}>Ajouter / supprimer vos photos </button>
							</Link>
							<Link passHref={true} href="/admin/orders">
								<button className={styles.button}>Historique des Achats</button>
							</Link>
						</div>
					</section>
				</>
			) : (
				<section>
					<div>
						<p>Votre session a expirée veuillez vous reconnecter</p>
					</div>
				</section>
			)}
		</main>
	);
}
