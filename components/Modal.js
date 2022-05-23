import styles from "../styles/Modal.module.scss";
import "animate.css";
import { useState } from "react";

export default function Modal({ children, open, onClick, onClick2 }) {
	const [animation, setAnimation] = useState("");

	const anim = (bool) => {
		if (bool === true) {
			return "animate__backInUp";
		} else {
			return "animate__backOutDown";
		}
	};

	return (
		<>
			{open ? (
				<div className={styles.modal}>
					<div className={styles.imgContainer}>
						{children}
						<button type="button" onClick={onClick}>
							close
						</button>
					</div>
				</div>
			) : (
				<></>
			)}
		</>
	);
}
