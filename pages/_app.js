import { useState } from "react";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AppContext from "../context/state";

import "../styles/globals.scss";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function MyApp({ Component, pageProps }) {
	const [isAdminLogged, setIsAdminLogged] = useState(false);
	const [isAdminSessionExpired, setIsAdminSessionExpired] = useState(false);

	const value = {
		isAdminLogged,
		setIsAdminLogged,
		isAdminSessionExpired,
		setIsAdminSessionExpired,
	};

	return (
		<PayPalScriptProvider options={{ "client-id": process.env.CLIENT_ID }}>
			<SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }} maxSnack={3}>
				<AppContext.Provider value={value}>
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<meta name="theme-color" content="#ffffff" />
						<meta name="author" content="Nicolas Maillols" />
						<meta name="description" content="Site officiel de l'artiste Untel, ici vous pouvez regarder ses dernières actualités, ainsi qu'acheter ses albums soit en dématérialisé ou en physique" />
						<link rel="manifest" href="/manifest.json" />
						<title>Untel Officiel</title>
					</Head>
					<Header />
					<Component {...pageProps} />
					<Footer />
				</AppContext.Provider>
			</SnackbarProvider>
		</PayPalScriptProvider>
	);
}

export default MyApp;
