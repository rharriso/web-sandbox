require(["classes/dependency", "classes/dependency2"], 
		function(A, B){
	
	var a = new A.ClassA();
	console.log(a.buddy);
	A.UtilFunction();

	var b = new B.ClassB();
	console.log(b.guy);
	B.UtilFunction2();

	console.log(a, b);
});