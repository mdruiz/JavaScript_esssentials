
//when add button is clicked, add activity
document.getElementById("add-button").addEventListener("click", function(){
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
});

// document.getElementsByClassName("delete-button")[0].onclick = function(){
// 	console.log("delete button pressed");
// }

// document.getElementsByClassName("complete-button").onclick = function(){
// 	console.log("complete button pressed");
// }


function addActivity(item){
	var list = document.getElementById("todo-list");

	//make new list element
	var activity = document.createElement("li");
	activity.innerHTML = item;

	//make div for buttons
	var buttons = document.createElement("div");
	buttons.classList.add("buttons");

	//make delete button
	var remove = document.createElement("button");
	remove.classList.add("delete-button");
	var removeImage = document.createElement("img")
	removeImage.src = "images/svg/trash-icon.svg";

	//add click event for remove button
	remove.addEventListener("click",removeActivity);

	//make complete button
	var complete = document.createElement("button");
	complete.classList.add("complete-button");
	var completeImage = document.createElement("img")
	completeImage.src = "images/svg/check-mark.svg";

	//add click event for complete button
	complete.addEventListener("click",completeActivity);

	//make vertical line to seperate buttons
	var vLine = document.createElement("div");
	vLine.classList.add("vertical-line");

	//add svg images to buttons
	remove.appendChild(removeImage);
	complete.appendChild(completeImage);

	//add buttons to same div
	buttons.appendChild(remove);
	buttons.appendChild(vLine);
	buttons.appendChild(complete);

	//add buttons to list
	activity.appendChild(buttons);

	//add new activity to top of list
	list.insertBefore(activity,list.childNodes[0]);
}

function removeActivity(){
	var activity = this.parentNode.parentNode;
	var parent = activity.parentNode;
	parent.removeChild(activity);
}

function completeActivity(){
	// console.log("complete button clicked");
	var activity = this.parentNode.parentNode;
	var parent = activity.parentNode;
	var id = parent.id;

	var target = (id == "todo-list") ? document.getElementById("completed-list"):document.getElementById("todo-list");

	parent.removeChild(activity);
	target.insertBefore(activity,target.childNodes[0]);

}
