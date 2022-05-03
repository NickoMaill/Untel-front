export const fetchPost = async () => {
	return await fetch("https://instagram-profile1.p.rapidapi.com/getprofile/untel.officiel", {
		method: "GET",
		headers: {
			"X-RapidAPI-Host": "instagram-profile1.p.rapidapi.com",
			"X-RapidAPI-Key": process.env.API_KEY,
		},
	})
		.then((response) => response.json())
		.then((response) => console.log(response))
		.catch((err) => console.error(err));
};
