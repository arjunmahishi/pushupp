function increment(){
	var count = parseInt(document.querySelector("#count").innerHTML) + 1;
	document.querySelector("#count").innerHTML = count;
}

function decrement(){
	var count = parseInt(document.querySelector("#count").innerHTML) - 1;
	document.querySelector("#count").innerHTML = count;
}

function reset(){
	document.querySelector("#count").innerHTML = 0;
}

$(document).on("pagecreate",function(){
	$(".main").on("swipeleft",function(){
		decrement();
	});           
});