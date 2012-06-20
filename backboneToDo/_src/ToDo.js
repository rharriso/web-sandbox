	/*
	 * Set up to-do model
	 */
	ToDo = Backbone.Model.extend({
		defaults: {
			title: "To Do",
			completed: false
		}
	});
	
	/*
	 * To do Item view
	 */
	ToDoItemView = Backbone.View.extend({
		initialize: function(){
			var t = this;
			
			//get model and bind event
			this.model.bind("change:title", function(){
				t.doTitleUpdate();	
			}).bind("change:completed", function(){
				t.doCheckUpdate();
			});
			
			//get elem from template
			var processedTempated = _.template(this.$el.html(), this.model.toJSON());
			this.setElement($(processedTempated));
			
			//get members
			this.$editLink = this.$el.find("a.edit");
			this.$titleText = this.$el.find("span.titleText");
			
			this.$titleInput = this.$el.find("input.titleInput");
			this.$updateLink = this.$el.find("a.update");
		},
		events: {
			"click a.edit": "doEditClick",
			"click a.update": "doUpdateClick",
			"click input[type=checkbox]": "doCheck"
		},
		//do edit click
		//show edit form, hide text
		doEditClick: function(){
			this.$editLink.hide();
			this.$titleText.hide();
			
			this.$titleInput.show();
			this.$updateLink.show();
		},
		//update model and hide the form
		doUpdateClick: function(){
			this.model.set({
				title: this.$titleInput.val()
			});
			
			this.$editLink.removeAttr("style");
			this.$titleText.show();
			this.$titleInput.hide();
			this.$updateLink.hide();
		},
		//check box to do
		doCheck: function(e){
			this.model.set({
				completed: $(e.currentTarget).is(":checked")
			});
		},
		//update text when model changes
		doTitleUpdate: function(){
			this.$titleText.text(this.model.get("title"));
		},
		doCheckUpdate: function(){
			if(this.model.get("completed")){
				this.$el.addClass("completed");
			}else{
				this.$el.removeClass("completed");
			}
		}
	});