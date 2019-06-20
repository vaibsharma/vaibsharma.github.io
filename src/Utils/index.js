function changePubDateToReadableDates(pubdate){
	let date = pubdate.split(" ");
	date = date.slice(1, 4);
	date = date.join(" ");
	return date
}

export {
	changePubDateToReadableDates
};