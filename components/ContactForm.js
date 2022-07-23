import React from "react";
import styles from "../styles/Contact.module.scss";

export default function ContactForm({ onSubmit, onBlur, isEmailValid, onChangeSubject, onChangeBody }) {
	return (
		<form onSubmit={onSubmit} className={styles.form}>
			<h2 style={{ textAlign: "center" }}>Formulaire de contact</h2>
			<div style={{ marginBlock: 10, display: "flex", flexDirection: "column" }}>
				<label htmlFor="email">Email</label>
				<input
					className={isEmailValid !== null ? (isEmailValid ? styles.goodEmail : styles.wrongEmail) : styles.input}
					placeholder="exemple@mail.com"
					onBlur={onBlur}
					name="email"
					type="text"
				/>
				{isEmailValid === false && <span style={{ color: "rgb(243, 36, 36)" }}>mauvais format d&apos;email</span>}
			</div>
			<div style={{ marginBlock: 10, display: "flex", flexDirection: "column" }}>
				<label htmlFor="subject">Sujet</label>
				<input
					className={styles.input}
					placeholder="Votre sujet de discussion"
					name="subject"
					onChange={onChangeSubject}
					type="text"
				/>
			</div>
			<div style={{ marginBlock: 10, display: "flex", flexDirection: "column" }}>
				<label htmlFor="messageBody">Votre message</label>
				<textarea
					className={styles.input}
					placeholder="Votre message ici ..."
					name="messageBody"
					style={{ fontFamily: "Roboto light" }}
					onChange={onChangeBody}
					cols="30"
					rows="10"
				/>
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<input className={styles.button} name="buttonSubmit" type="submit" value="envoyer votre message" />
			</div>
		</form>
	);
}
