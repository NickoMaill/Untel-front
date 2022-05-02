import React from "react";
import styles from "../styles/Youtube.module.scss"

export default function Youtube({ src, title }) {
	return (
		<div>
			<iframe
				className={styles.iframe}
				src={src}
				title="youtube"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
}
