import { useState, useRef } from "react";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AppContext from "../context/state";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	const [isBurger, setIsBurger] = useState(false);

	const value = {
		isBurger,
		setIsBurger,
	};

	return (
		<SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "right" }} maxSnack={3}>
			<AppContext.Provider value={value}>
				<Head>
					<title>Untel Officiel</title>
					<script src="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.js"></script>
					<link href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css" rel="stylesheet" />
				</Head>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</AppContext.Provider>
		</SnackbarProvider>
	);
}

export default MyApp;
