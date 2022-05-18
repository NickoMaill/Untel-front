import styles from "../styles/Modal.module.scss";
import "animate.css";
import { useState } from "react";

export default function Modal({ children, open, onClick }) {
	const [animation, setAnimation] = useState("");

	const anim = (bool) => {
		if (bool === true) {
			return "animate__backInUp";
		} else {
			return "animate__backOutDown";
		}
	};

	return (
		<div>
			{open ? (
				<div className={styles.modal} onClick={onClick}>
					<div className={`${styles.imgContainer} animate__animated ${anim(open)}`}>
						{children}
						<button type="button" onClick={onClick}>
							close
						</button>
					</div>
				</div>
			) : (
					<></>
			)}
		</div>
	);
}
