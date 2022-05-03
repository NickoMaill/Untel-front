import React, { useState } from "react";
import { useSnackbar } from "notistack";
import { login } from "../utils/login";

export default function admin() {
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
                        <h3>Bienvenu</h3>
						<h4>sur votre espace administrateur</h4>
						<p>
							Ici vous pouvez modifier certains contenue de votre site comme les photos, ajouté des albums
							ou vos prochaines dates
						</p>
						<p>
							pour tout autre changement non répertorié dans votre espace veuillez contacter le
							développeur en charge du site
						</p>
					</div>
                    <div>
                        <h5></h5>
                    </div>
				</section>
			)}
		</main>
	);
}
