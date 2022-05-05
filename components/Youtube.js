import React from "react";
import styles from "../styles/Youtube.module.scss"

export default function Youtube({ src, title, ref }) {
	return (
		<div>
			<iframe
			loading="lazy"
				className={styles.iframe}
				ref={ref}
				src={src}
				title="youtube"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			></iframe>
		</div>
	);
}
