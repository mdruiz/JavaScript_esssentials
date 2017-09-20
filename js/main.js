
//when add button is clicked, add activity
document.getElementById("add-button").onclick = function(){
	var input = document.getElementById("input-box");
	if(input.value){
		console.log(input.value);
		// adding new activity
		addActivity(input.value);
		input.value = "";
	}
	else{
		console.log("input is empty");
		// alert("input is empty");
	}
}

// document.getElementsByClassName("delete-button")[0].onclick = function(){
// 	console.log("delete button pressed");
// }

// document.getElementsByClassName("complete-button").onclick = function(){
// 	console.log("complete button pressed");
// }


function addActivity(item){
	var list = document.getElementById("todo-list");

	//making new list element
	var activity = document.createElement("li");
	activity.innerHTML = item;

	//making div for buttons
	var buttons = document.createElement("div");
	buttons.classList.add("buttons");

	//making delete button
	var remove = document.createElement("button");
	remove.classList.add("delete-button");
	var removeImage = document.createElement("img")
	removeImage.src = "images/svg/trash-icon.svg";

	//making complete button
	var complete = document.createElement("button");
	complete.classList.add("complete-button");
	var completeImage = document.createElement("img")
	completeImage.src = "images/svg/check-mark.svg";

	//making vertical line to seperate buttons
	var vLine = document.createElement("div");
	vLine.classList.add("vertical-line");

	//adding svg images to buttons
	remove.appendChild(removeImage);
	complete.appendChild(completeImage);

	//adding buttons to same div
	buttons.appendChild(remove);
	buttons.appendChild(vLine);
	buttons.appendChild(complete);

	//adding buttons to list
	activity.appendChild(buttons);

	//add new activity to top of list
	list.insertBefore(activity,list.childNodes[0]);
}


