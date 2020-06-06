window.onload = function() {
	//variables
	var billtype = document.getElementById("billtype");
	var amount = document.getElementById("amount");
	var date = document.getElementById("date");
	var btn = document.getElementById("btn");
	var next = document.getElementById("next");
	var id = 1;
	var expense = "";
	var expenses = [];

	btn.addEventListener("click", additem);

	//next.addEventListener("click", displayList);

	function additem() {
			var category = billtype.value;
			var date1 = date.value;
			var amount1 = amount.value;
			expense = {"category": category, "amount": amount1, "date": date1};
			
			if(typeof(Storage) !== "undefined") {
				if(localStorage.getItem("expenses") == null){
					expenses.push(expense);
					localStorage.setItem("expenses", JSON.stringify(expenses));
				} else {
					expenses = JSON.parse(localStorage.getItem("expenses"));
					expenses.push(expense);
					localStorage.setItem("expenses", JSON.stringify(expenses));
				}
			}
			form.reset();
}
}
