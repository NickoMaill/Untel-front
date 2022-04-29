import React, { useState, useRef } from "react";
import styles from "../styles/PhotoGallery.module.scss";

export default function PhotoGallery() {
	const ref = useRef(null)
	// const [isVisible, setIsVisible] = useState(false);
	// const [path, setPath] = useState("");

	// const openCloseModal = (e) => {
	// 	setPath(e.target.src);
	// 	setIsVisible(!isVisible);
	// };

	// console.log(ref.current.scrollLeft);

	const scroll = (scrollOffset) => {
		ref.current.scrollLeft += scrollOffset
	}

	return (
		<div style={{display:"flex" ,alignItems: "center" }}>
			<div className={styles.arrowContainer}>
				<div onClick={() => scroll(-1000)} style={{ backgroundColor: "rgba(0,0,0,0.7)", padding: 10 }}>
					<img className={styles.arrowGallery} src="/icons/left.png" alt="flèche gauche" />
				</div>
				<div onClick={() => scroll(1000)} style={{ backgroundColor: "rgba(0,0,0,0.7)", padding: 10 }}>
					<img className={styles.arrowGallery} src="/icons/right.png" alt="flèche droite" />
				</div>
			</div>
			<div className={styles.imgContainer} ref={ref}>
				<img className={styles.img} src="/images/untel-band3.webp" alt="Untel" />
				<img className={styles.img} src="/images/untel-band4.webp" alt="Untel" />
				<img className={styles.img} src="/images/untel-favo.webp" alt="Untel" />
				<img className={styles.img} src="/images/untel-front1.webp" alt="Untel" />
				<img className={styles.img} src="/images/untel-front2.webp" alt="Untel" />
				<img className={styles.img} src="/images/untel.webp" alt="Untel" />
			</div>
		</div>
	);
}
