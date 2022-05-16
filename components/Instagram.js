import React from "react";
import styles from "../styles/Iframe.module.scss";

export default function Instagram({ postId }) {
	return (
		<div className={styles.iframeContainer}>
			<iframe
				loading="lazy"
				src={`https://www.instagram.com/p/${postId}/embed`}
				className={styles.instaFrame}
				width="320"
				height="600"
				frameBorder="0"
				scrolling="no"
				allowtransparency="true"
			></iframe>
		</div>
	);
}
