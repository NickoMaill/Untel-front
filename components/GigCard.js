import React from "react";

export default function GigCard({ title, date, city, country, event, onClick }) {
	return (
		<div>
			<h4>{title}</h4>
			<span>{date}</span>
			<span>
				{city}, {country}
			</span>
			<a href={event}>
				<button>accéder a l'évènement</button>
			</a>
			<a>
				<button onClick={onClick}>afficher sur la carte</button>
			</a>
		</div>
	);
}
