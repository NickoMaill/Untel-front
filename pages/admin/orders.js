import { useState } from "react";
import styles from "../../styles/Admin.module.scss";

export default function Orders({ data }) {
	const [dataOrder, setDataOrder] = useState(data);
	const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [orderNumber, setOrderNumber] = useState(10);
	const [searchedArticle, setSearchedArticle] = useState("");
	const [searchedId, setSearchedId] = useState("");
	const [searchedCity, setSearchedCity] = useState("");
	const [searchedCountry, setSearchedCountry] = useState("");
	const [searchedFirstName, setSearchedFirstName] = useState("");
	const [searchedLastName, setSearchedLastName] = useState("");
	const [searchedDates, setSearchedDates] = useState({});

	const prevOrNextPage = (sign) => {
		if (sign === "+" && orderNumber <= data.orders.length) {
			setOrderNumber((prevState) => prevState + 5);
			setCurrentPage((prevState) => prevState + 1);
		}

		if (sign === "-" && orderNumber > 10) {
			setOrderNumber((prevState) => prevState - 5);
			setCurrentPage((prevState) => prevState - 1);
		}
	};

	const searchRequest = (bool, e) => {
		e.preventDefault();
		setIsLoading(true);
		let queryString = "";
		let url;

		if (searchedArticle !== "") {
			queryString += `name_item=${searchedArticle}&`;
		}

		if (searchedId !== "") {
			queryString += `order_id=${searchedId}&`;
		}

		if (searchedCity !== "") {
			queryString += `city=${searchedCity}&`;
		}

		if (searchedCountry !== "") {
			queryString += `country=${searchedCountry}&`;
		}

		if (searchedFirstName !== "") {
			queryString += `client_firstname=${searchedFirstName}&`;
		}

		if (searchedLastName !== "") {
			queryString += `client_lastname=${searchedLastName}&`;
		}

		if (Object.keys(searchedDates).length > 0) {
			queryString += `date-interval=${searchedDates.date1}_${searchedDates.date2}&`;
		}

		if (bool === false) {
			url = "http://localhost:8000/orders/";
		} else {
			url = `http://localhost:8000/orders/query?${queryString}`;
		}

		console.log(url);

		fetch(url, {
			method: "GET",
			mode: "cors",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			credentials: "include",
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.success) {
					setDataOrder(res);
					setIsLoading(false);
					console.log(res);
				} else {

				}
			});
	};

	return (
		<main>
			<div>
				<h1>Historique des achats</h1>
				<span>ici vous pouvez consulter l'historique de tout vos achats</span>
			</div>
			<section className={styles.formSection}>
				<form onSubmit={(e) => searchRequest(true, e)} className={styles.formContainer}>
					<div className={styles.searchForm}>
						<div className={styles.searchPart}>
							<label>Article</label>
							<input
								className={styles.searchInput}
								onChange={(e) => setSearchedArticle(e.target.value)}
								type="search"
							/>
						</div>
						<div className={styles.searchPart}>
							<label>N° de commande</label>
							<input
								className={styles.searchInput}
								onChange={(e) => setSearchedId(e.target.value)}
								type="search"
							/>
						</div>
						<div className={styles.searchPart}>
							<label>Ville</label>
							<input
								className={styles.searchInput}
								onChange={(e) => setSearchedCity(e.target.value)}
								type="search"
							/>
						</div>
						<div className={styles.searchPart}>
							<label>Pays</label>
							<input
								className={styles.searchInput}
								onChange={(e) => setSearchedCountry(e.target.value)}
								type="search"
							/>
						</div>
						<div className={styles.searchPart}>
							<label>Nom</label>
							<input
								className={styles.searchInput}
								onChange={(e) => setSearchedLastName(e.target.value)}
								type="search"
							/>
						</div>
						<div className={styles.searchPart}>
							<label>Prénom</label>
							<input
								className={styles.searchInput}
								onChange={(e) => setSearchedFirstName(e.target.value)}
								type="search"
							/>
						</div>
						<div className={styles.searchPart}>
							<span>date</span>
							<div>
								<label>entre le</label>
								<input
									className={styles.searchInput}
									onChange={(e) =>
										setSearchedDates((prevState) => ({
											...prevState,
											date1: e.target.value,
										}))
									}
									type="date"
									value={searchedDates.date1 ? searchedDates.date1 : ""}
								/>
								<label>et</label>
								<input
									className={styles.searchInput}
									onChange={(e) =>
										setSearchedDates((prevState) => ({
											...prevState,
											date2: e.target.value,
										}))
									}
									type="date"
									value={searchedDates.date2 ? searchedDates.date2 : ""}
								/>
							</div>
							<div>
								<input value="reset" type="button" onClick={() => setSearchedDates({})} />
							</div>
						</div>
					</div>
					<div>
						<input value="rechercher" type="submit" />
						<input
							onClick={(e) => searchRequest(false, e)}
							value="Afficher l'historique entier"
							type="button"
						/>
					</div>
				</form>
			</section>
			<div>
				<div>
					<h2>Info intéressante</h2>
				</div>
				<div>
					<h3>Profits</h3>
					<div>
						<span>sur le mois</span>
						<p></p>
					</div>
					<div>
						<span>sur l'année</span>
						<p></p>
					</div>
				</div>
			</div>
			<div>
				<table>
					<thead>
						<tr>
							<th>N° de commande</th>
							<th>article acheté</th>
							<th>Date d'achat</th>
							<th>Prénom</th>
							<th>Nom de famille</th>
							<th>Prix</th>
							<th>Devise</th>
							<th>Email</th>
							<th>Adresse</th>
							<th>Ville</th>
							<th>Code postal</th>
							<th>Région</th>
							<th>Pays</th>
						</tr>
					</thead>
					{isLoading ? (
						<></>
					) : (
						<tbody>
							{dataOrder.orders.map((order, i) => {
								if (i < orderNumber) {
									return (
										<tr key={i}>
											<td>{order.order_id}</td>
											<td style={{ textTransform: "capitalize" }}>
												{[order.name_item].map((i) => i.replace(/-/g, " ")).join("")}
											</td>
											<td>{order.date_of_order}</td>
											<td>{order.client_firstname}</td>
											<td>{order.client_lastname}</td>
											<td>{order.amount}</td>
											<td>{order.currency}</td>
											<td>{order.client_email}</td>
											<td>{order.address.address_line_1}</td>
											<td>{order.city}</td>
											<td>{order.address.postal_code}</td>
											<td>{order.address.admin_area_2}</td>
											<td>{order.country}</td>
										</tr>
									);
								}
							})}
						</tbody>
					)}
				</table>
				<div>
					<button disabled={orderNumber <= 10 ? true : false} onClick={() => prevOrNextPage("-")}>
						prev
					</button>
					<span>{currentPage}</span>
					<button
						disabled={orderNumber >= dataOrder.orders.length ? true : false}
						onClick={() => prevOrNextPage("+")}
					>
						next
					</button>
				</div>
			</div>
		</main>
	);
}

export const getServerSideProps = async () => {
	const data = await fetch("http://localhost:8000/orders/", {
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
		},
	};
};
