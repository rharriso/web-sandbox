	/*
	 * Collection of ToDos Models
	 */
	ToDoCollection = Backbone.Collection.extend({
		model: ToDo
	});
	/*
	 * Model for the ToDo List
	 */
	ToDoList = Backbone.Model.extend({
		defaults:{
			toDos: new ToDoCollection(),
			title: "Untitled"
		},
		addToDo: function(toDo){
			this.get("toDos").add(toDo);
		}
	});
	
	/*
	 * To do list view
	 */
	ToDoListView = Backbone.View.extend({
		initialize: function(){
			var t = this;
			
			//get members
			this.$ul = this.$el.find("#toDoList");
			this.$itemTemplate = $("#toDoItem");
			
			//set title
			this.$titleText = this.$el.find(".todo_title");
			this.$titleText.text(this.model.get("title"));
			this.$titleInput = this.$el.find("input.titleInput");
			this.$titleInput.val(this.model.get("title"));
			//listen for title change
			this.model.bind("change:title", function(){
				t.doTitleUpdate();	
			});
			
			//get links and input field
			this.$titleInput = this.$el.find("input.titleInput");
			this.$updateLnk = this.$el.find("a.update");
			this.$editLnk = this.$el.find("a.edit");
			
			this.render();
		},
		//create the list
		render: function(){
			this.$ul.empty();
			
			var i = 0,
				toDos = this.model.get("toDos");
				
			for(i; i<toDos.models.length; i++){
				var toDoItem = new ToDoItemView({
					el: this.$itemTemplate, 
					model: toDos.models[i]
				});
				this.$ul.append(toDoItem.el);
			}
		},
		doTitleUpdate: function(){
			this.$titleText.text(this.model.get("title"));
		},
		events: {
			"click #addToDo": "doAddItem",
			"click h3 a.edit"	: "doEditClick",
			"click h3 a.update": "doUpdateClick"
		},
		//add element and redraw list
		doAddItem: function(){
			this.model.addToDo(new ToDo());
			this.render();
		},
		//start edit process
		doEditClick: function(){
			this.$titleText.hide();
			this.$editLnk.hide();
			this.$updateLnk.show();
			this.$titleInput.show();
		},
		//update proces
		doUpdateClick: function(){
			this.model.set({
				title: this.$titleInput.val()
			});
			
			this.$titleText.show();
			this.$editLnk.removeAttr("style");
			this.$updateLnk.hide();
			this.$titleInput.hide();
		},
		//update title text on model update
		onTitleChange: function(){
			this.$titleInput.val(this.model.get("title"));
		}
	});