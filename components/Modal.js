import styles from "../styles/Modal.module.scss";

export default function Modal({ children, open, onClick }) {
	return (
		<div>
			{open ? (
				<div className={styles.modal} onClick={onClick}>
					<div className={styles.imgContainer}>
						{/* <img className={styles.img} src={src} alt="photo de l'artiste Untel" /> */}
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
