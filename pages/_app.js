import { useState } from "react";
// import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AppContext from "../context/state";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
	const [isBurger, setIsBurger] = useState(false);

	const value = {
		isBurger,
		setIsBurger
	}

	return (
		<AppContext.Provider value={value}>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</AppContext.Provider>
	);
}

export default MyApp;
