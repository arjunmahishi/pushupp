var GOAL = 10;

function speak(text){
	responsiveVoice.speak(text, "UK English Male");
}

function showGetNumber(){
	$("#get-number").show();
	$("#main").hide();
}

function showMain(){
	$("#get-number").hide();
	$("#main").show();
}

function increment(){
	var count = parseInt(document.querySelector("#count").innerHTML) + 1;
	document.querySelector("#count").innerHTML = count;
	var goal = parseInt(document.querySelector("#goal").value);
	var remaining = goal - count;
	console.log(goal, count, remaining);
	if(remaining > 0){
		speak(remaining + " more to go.");
	}else if(remaining == 0){
		speak("You have done it!!");
	}
}

function decrement(){
	var count = parseInt(document.querySelector("#count").innerHTML) - 1;
	document.querySelector("#count").innerHTML = count;
}

function reset(){
	document.querySelector("#count").innerHTML = 0;
}

showGetNumber();

$(document).on("pagecreate",function(){
	$(".main").on("swipeleft",function(){
		decrement();
	});           
});