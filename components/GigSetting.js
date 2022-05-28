import { useState } from "react";
import { useSnackbar } from "notistack";
import Modal from "./Modal";
import styles from "../styles/AlbumSettings.module.scss";

export default function GigSetting({ place, city, country, address, date, eventLink, id, request }) {
	const { enqueueSnackbar } = useSnackbar();
	const [gigPlace, setGigPlace] = useState(place);
	const [gigCity, setGigCity] = useState(city);
	const [gigCountry, setGigCountry] = useState(country);
	const [gigAddress, setGigAddress] = useState(address);
	const [gigDate, setGigDate] = useState(date);
	const [gigEventLink, setGigEventLink] = useState(eventLink);

	const updateOrAddGig = (event, request) => {
		event.preventDefault();
		let url;

		if (request === "POST") {
			url = "http://localhost:8000/gig_dates/add";
		}

		if (request === "PUT") {
			url = `http://localhost:8000/gig_dates/update-gig/${id}`;
		}

		fetch(url, {
			method: request,
            mode: "cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include",
			body: JSON.stringify({
                place: gigPlace,
                city: gigCity,
                country: gigCountry,
                address: gigAddress,
                date: gigDate,
                eventLink: gigEventLink,
            }),
		})
			.then((res) => res.json())
			.then((res) => {
				if (!res.success) {
					enqueueSnackbar("une erreur s'est produite...", {
						variant: "error",
					});

					return;
				} else {
					enqueueSnackbar("Album mis à jour", {
						variant: "success",
					});
				}
			})
			.catch((err) => console.error(err));
	};

	return (
		<div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
			<form
				onSubmit={(e) => updateOrAddGig(e, request)}
				className={styles.form}
				style={{ display: "flex", flexWrap: "wrap", width: "50%", justifyContent: "space-evenly" }}
			>
				<div className={styles.formDetails}>
					<label htmlFor="place">Lieux</label>
					<input
						className={styles.input}
						placeholder="Lieu du concert"
						name="place"
						defaultValue={gigPlace}
						onChange={(e) => setGigPlace(e.target.value)}
						type="text"
					/>
				</div>
				<div className={styles.formDetails}>
					<label htmlFor="place">Adresse</label>
					<input
						className={styles.input}
						placeholder="Adresse du concert"
						name="place"
						defaultValue={gigAddress}
						onChange={(e) => setGigAddress(e.target.value)}
						type="text"
					/>
				</div>
				<div className={styles.formDetails}>
					<label htmlFor="city">Ville</label>
					<input
						className={styles.input}
						placeholder="Ville du concert"
						name="city"
						defaultValue={gigCity}
						onChange={(e) => setGigCity(e.target.value)}
						type="text"
					/>
				</div>
				<div className={styles.formDetails}>
					<label htmlFor="country">Pays</label>
					<input
						className={styles.input}
						placeholder="Pays du concert"
						name="country"
						defaultValue={gigCountry}
						onChange={(e) => setGigCountry(e.target.value)}
						type="text"
					/>
				</div>
				<div className={styles.formDetails}>
					<label htmlFor="date">Date</label>
					<input
						className={styles.input}
						name="date"
						defaultValue={gigDate.slice(0, 10)}
						onChange={(e) => setGigDate(e.target.value)}
						type="date"
					/>
				</div>
				<div className={styles.formDetails}>
					<label htmlFor="eventLink">Évènement facebook</label>
					<input
						className={styles.input}
						placeholder="Url de l'event Facebook"
						name="eventLink"
						defaultValue={gigEventLink}
						onChange={(e) => setGigEventLink(e.target.value)}
						type="url"
					/>
				</div>
				<div style={{ display: "flex", justifyContent: "space-around", marginTop: 70 }}>
					<input
						className={styles.button}
						value={request === "POST" ? "Ajouter une date" : "Modifier une date"}
						type="submit"
					/>
				</div>
			</form>
		</div>
	);
}
