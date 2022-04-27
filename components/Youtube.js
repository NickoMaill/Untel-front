import React from "react";
import styles from "../styles/Youtube.module.scss"

export default function Youtube({ src, title }) {
	return (
		<div>
			<iframe
				className={styles.iframe}
				// width="460"
				// height="215"
				src={src}
				title={title}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
}
