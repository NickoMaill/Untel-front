import React, { useState } from "react";
import styles from "../styles/Gig.module.scss";

// export const getStaticProps = async () => {
//   const data = await fetch("https://restcountries.com/v3.1/all")
//   const gigs = await data.json()
//   return {
//     props: {
//       gigs,
//     },
//   };
// }

export default function Gig({ gigs }) {
	const [isLoading, setIsLoading] = useState(true);
  if (gigs !== undefined) {
   setIsLoading(false) 
  }
  
	return (
		<div style={{ backgroundColor: "#fff" }}>
			<div>
				<h3>concert à venir</h3>
			</div>
			<div>
				{isLoading ? (
					<div className={styles.loader}>Loading...</div>
				) : (
					<ul>
						{res.gigDates.map((gigData, i) => {
							console.log(gigData);
							return <li key={i}>{gigData.place}</li>;
						})}
					</ul>
				)}
			</div>
		</div>
	);
}

