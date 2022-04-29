import React, { useState, useEffect } from "react";

export default function Contact() {
	const [userMessage, setUserMessage] = useState({
		email: "",
		object: "",
		messageBody: "",
	});
	const [isEmailValid, setIsEmailValid] = useState(null);
	const [messageSend, setMessageSend] = useState(false);

	const mailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

	const sendMessage = () => {};

	const verifyEmail = (input) => {
    console.log(input);
		if (!mailRegex.test(input)) {
			setIsEmailValid(false);
			console.log("mauvais format");
		} else {
			setIsEmailValid(true);
      console.log("bon format");
		}
	};

	return (
		<main>
			<section>
				<h2>Contact</h2>
				<div>
					{!messageSend ? (
						<>
							<p>Un renseignement, une collab, un concert, ou une simple question ?</p>
							<form style={{ display: "flex", flexDirection: "column", width: "30%" }}>
								<h3>Formulaire de contact</h3>
								<label htmlFor="email">email</label>
								<input onTouchEnd={(e) => verifyEmail(e.target.value)} name="email" type="text" />
                {isEmailValid === false && <span>mauvais format d''email</span>}
								<label htmlFor="object">objet</label>
								<input name="object" type="text" />
								<label htmlFor="messageBody">Votre message</label>
								<textarea name="messageBody" cols="30" rows="10"></textarea>
								<input
									name="buttonSubmit"
									type="submit"
									onSubmit={sendMessage}
									value="envoyer votre message"
								/>
							</form>
						</>
					) : (
						<p>message envoyer</p>
					)}
				</div>
			</section>
		</main>
	);
}
