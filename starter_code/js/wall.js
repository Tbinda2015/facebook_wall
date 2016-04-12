$(document).ready(function() {
	$("#post-btn").click(function() {
		var message = "<p>" + $("#message").val() + "</p>";
		$("#wall").prepend(message);
	});
});
