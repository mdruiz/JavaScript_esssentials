//holds activity data
var data = (localStorage.getItem("todoList")) ? JSON.parse(localStorage.getItem("todoList")) : {todo: [], completed: [] };

loadTodoList();

//when add button is clicked, add activity
document.getElementById("add-button").addEventListener("click", function(){
	var input = document.getElementById("input-box");
	if(input.value){
		addActivity(input.value,false);
		data.todo.push(input.value);
		updateData();
		input.value = "";
	}
});

//when enter is pressed, add activity
document.getElementById("input-box").addEventListener("keydown",function(e){
	if(e.code === "Enter" && this.value){
		addActivity(this.value,false);
		data.todo.push(this.value);
		updateData();
		this.value = "";
	}
});

function addActivity(item,isCompleted){
	var list = (isCompleted) ? document.getElementById("completed-list") : document.getElementById("todo-list");

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
	completeImage.src = (isCompleted) ? "images/svg/check-mark-fill.svg" : "images/svg/check-mark.svg";

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
	var value = activity.innerText;
	parent.removeChild(activity);

	if(parent.id === "todo-list"){
		data.todo.splice(data.todo.indexOf(value),1);
	}
	else{
		data.completed.splice(data.completed.indexOf(value),1);
	}
	updateData();
}

function completeActivity(){
	// console.log("complete button clicked");
	var activity = this.parentNode.parentNode;
	var parent = activity.parentNode;
	var value = activity.innerText;

	var target = (parent.id === "todo-list") ? document.getElementById("completed-list"):document.getElementById("todo-list");

	if(parent.id === "todo-list"){
		this.childNodes[0].src = "images/svg/check-mark-fill.svg"
		data.todo.splice(data.todo.indexOf(value), 1);
    	data.completed.push(value);
	}
	else{
		this.childNodes[0].src = "images/svg/check-mark.svg"
		data.completed.splice(data.completed.indexOf(value), 1);
    	data.todo.push(value);
	}

	parent.removeChild(activity);
	target.insertBefore(activity,target.childNodes[0]);
	updateData();
}

function updateData(){
	localStorage.setItem("todoList",JSON.stringify(data));
}

function loadTodoList(){
	// if(!data.todo.length && !data.completed.length){
	// 	return
	// }
	for(var i = 0; i < data.todo.length; i++){
		addActivity(data.todo[i],false);
	}

	for(var i = 0; i < data.completed.length; i++){
		addActivity(data.completed[i],true);


	}
}
