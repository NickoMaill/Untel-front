import { useRouter } from "next/router";
import React from "react";
import Success from "../../../components/Success";
import styles from "../../../styles/AlbumPages.module.scss";

export default function OrderCompleted({ order }) {
	const router = useRouter();
	// const date = new Date()
	const navigate = () => {
		router.push("/");
	};
	return (
		<main className={styles.mainOrder}>
			<Success title="Achat effectué avec succès!">
				Je te remercie d&apos;avoir acheter mon CD {order.name_item}, j&apos;éspère qu&apos;il te plaira!
			</Success>
		</main>
	);
}

export const getServerSideProps = async ({ params }) => {
	const order = await fetch(`http://localhost:8000/orders/id/${params.orderId}`, {
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
