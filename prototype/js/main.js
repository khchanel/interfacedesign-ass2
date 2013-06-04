function back() {
	window.history.back();
}

function forward() {
	window.history.forward();
}

function change_follow_icon() {
	if ($("#follow-txt").html() === "Followed") {
		$("#follow-txt").html("Follow");
	} else {
		$("#follow-txt").html("Followed");
	}
}
