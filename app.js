$(document).ready(function(){
	var numOfClicks = 0;

	$(".clickme").on("click", function(event){
		numOfClicks++
		$(".seconddiv").children().remove();
		$(".seconddiv").last().remove();
		$("body").append("<div class='seconddiv' data-button-toggle='1'</div>");
		$(".seconddiv").append("<p class='totalclicks'>Here are the number of clicks: " + numOfClicks + "</p>");
		$(".seconddiv").append("<button class='changecolor'>Change Color</button>");
		$(".seconddiv").append("<button class='remove'>Remove</button>");
	});
	$(".changecolor").on("click", function(){
		$(this).closest("div").css("background-color", "#FF0000");
	});
});