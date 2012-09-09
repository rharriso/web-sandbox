//export for require.js
define && define(["libs/subdependency"],
				function(sd){

	sd.UtilFunc();
	var two = new sd.LibClass2();
	console.log(two);


	var ClassB = function(){
		this.guy = "buddy"
	};

	function UtilFunction2(){
		console.log("HAI");
	}

	return {
		ClassB 		 : ClassB,
		UtilFunction2 : UtilFunction2
	};
});