
document.getElementById("add-button").onclick = function(){
	var input = document.getElementById("input-box");
	if(input.value){
		console.log(input.value);
		input.value = "";
	}
	else{
		alert("input is empty");
	}
}