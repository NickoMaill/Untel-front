import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.scss";

const imageSize = 290;

export default function Album({ alt, title, src, children, releaseDate, subtitle, href, isReleased, date }) {
	const [isLoaded, setIsLoaded] = useState(true);

	return (
		<div className={styles.cardContainer}>
			<div className={isReleased < new Date() ? styles.imgAlbum : styles.notReleasedAlbumPic}>
				<Image quality={50} width={imageSize} height={imageSize} alt={alt} title={title} src={src} />
			</div>
			<div className={styles.titleAlbumContainer}>
				{isReleased ? <h3 className={styles.albumTitle}>{children}</h3> : <span>Date de sortie</span>}
				{subtitle.length && isReleased ?  <h5>{subtitle}</h5> : <></>}
				{isReleased ? 
				
				<p className={styles.albumText} style={{ fontStyle: "italic" }}>
					{releaseDate.slice(0, 4)}
				</p> : <span>{date}</span>
			}
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
