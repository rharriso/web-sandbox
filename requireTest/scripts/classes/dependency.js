//export for require.js
define && define(["libs/subdependency"],
				function(sd){

	sd.UtilFunc();
	var two = new sd.LibClass2();
	console.log(two);

	var ClassA = function(){
		this.budy = "guy"
	};

	function UtilFunction(){
		console.log("HAI");
	}

	return exports = {
		ClassA 		 : ClassA,
		UtilFunction : UtilFunction
	};
});