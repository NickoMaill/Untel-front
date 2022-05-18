import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/AlbumPages.module.scss";

const imageSize = 290;

export default function Album({ alt, title, src, children, year, subtitle, href }) {
	const [isLoaded, setIsLoaded] = useState(true);

	return (
		<div className={styles.cardContainer}>
			<div className={styles.imgAlbum}>
				<Image width={imageSize} height={imageSize} alt={alt} title={title} src={src} />
			</div>
			<div className={styles.titleContainer}>
				<h3 className={styles.albumTitle}>{children}</h3>
				{subtitle.length > 0 && <h5>{subtitle}</h5>}
				<p className={styles.albumText} style={{ fontStyle: "italic" }}>
					{year}
				</p>
			</div>
			<Link href={`/albums/${href}`}>
				{isLoaded ? (
					<button onClick={() => setIsLoaded(false)} className={styles.albumButton}>
						Plus d&apos;info
					</button>
				) : (
					<button className={styles.albumLoader}>
						Plus d&apos;info<span className={styles.spinner}></span>
					</button>
				)}
			</Link>
		</div>
	);
}
