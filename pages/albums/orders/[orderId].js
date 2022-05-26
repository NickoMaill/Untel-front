import { useRouter } from "next/router";
import React from "react";
import Success from "../../../public/svg/success.svg";
import styles from "../../../styles/AlbumPages.module.scss";

export default function orderCompleted({ order }) {
	const router = useRouter();
	// const date = new Date()
	const navigate = () => {
		router.push("/");
	};
	return (
		<main className={styles.mainOrder}>
			{/* {Date.parse(order.date_of_order) > new Date().parse() + 60 ? ( */}
			<div className={styles.titleOrder}>
				<div>
					<Success />
				</div>
				<div>
					<h1 className={styles.orderSuccess}>Achat effectué avec succès!</h1>
				</div>
			</div>
			<div className={styles.orderMessage}>
				<span className={styles.spanOrder}>
					Je te remercie d&apos;avoir acheter mon CD {order.name_item}, j&apos;éspère qu&apos;il te plaira!
				</span>
				<div className={styles.borderDiv}>
					<div className={styles.coloredDiv}>
						<button onClick={() => navigate()} className={styles.purchaseButton}>
							Retourner à l&apos;accueil
						</button>
					</div>
				</div>
			</div>
			{/* ) : (
				router.push("/404")
			)} */}
		</main>
	);
}

export const getServerSideProps = async ({ params }) => {
	const order = await fetch(`http://localhost:8000/orders/${params.orderId}`, {
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

	if (order.success === false) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			order: order.order[0],
		},
	};
};
