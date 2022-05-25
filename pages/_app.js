import { useEffect, useState } from "react";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AppContext from "../context/state";

import "../styles/globals.scss";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
	const [isAdminLogged, setIsAdminLogged] = useState(false);
	const [isAdminSessionExpired, setIsAdminSessionExpired] = useState(false);
	const [screenWidth, setScreenWidth] = useState(null);

	const update = () => {
		setScreenWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", update);
		update();
	}, []);

	const value = {
		isAdminLogged,
		setIsAdminLogged,
		isAdminSessionExpired,
		setIsAdminSessionExpired,
		screenWidth,
		setScreenWidth,
	};

	return (
		<PayPalScriptProvider options={{ "client-id": process.env.CLIENT_ID }}>
			<SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }} maxSnack={3}>
				<AppContext.Provider value={value}>

						<Head>
							<meta name="viewport" content="width=device-width, initial-scale=1" />
							<meta name="theme-color" content="#ffffff" />
							<meta name="author" content="Nicolas Maillols" />
							<meta
								name="description"
								content="Site officiel de l'artiste Untel, ici vous pouvez regarder ses dernières actualités, ainsi qu'acheter ses albums soit en dématérialisé ou en physique"
							/>
							<link rel="manifest" href="/manifest.json" />
							<link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
							<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
							<link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
							<link rel="mask-icon" href="icons/safari-pinned-tab.svg" color="#5bbad5" />
							<meta name="msapplication-TileColor" content="#da532c" />
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
