import Link from "next/link";
import React from "react";

export default function orderCompleted({ order }) {
	return (
		<div>
			<div>
				<h1>Achat effectué avec succès</h1>
			</div>
			<div>
				<h2>Je te remercie d&apos;avoir acheter mon CD {order.name_item}, j&apos;éspère qu&apos;il te plaira ! </h2>
				<p>
					c&apos;est très important pour moi car cela me permet de financer mes futurs projets, que je l’espère, tu
					aimera!
				</p>
				<p>N&apos;hésite pas a suivre mes dernières actus sur mes reseaux sociaux </p>
			</div>
			<Link passHref={true} href="/">
				<button>Retourner a l&apos;accueil</button>
			</Link>
		</div>
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

	if (!order.success) {
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