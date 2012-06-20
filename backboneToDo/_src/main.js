$(function(){
	/*
	 * Create to do list on the wrapper with some initial items
	 */
	var toDoList = new ToDoList({
		toDos: new ToDoCollection([new ToDo({title: "Chip the glasses."}),
					new ToDo({title: "Crack the plates."}),
					new ToDo({title: "Dull the knives."}),
					new ToDo({title: "Bend the forks."})]),
		title: "What Bilbo Baggins Hates"
	});
	

	//create the view from the toDoList
	var $toDoListView = new ToDoListView({
		el: $("#toDoListWrapper"),
		model: toDoList 
	});	
});
