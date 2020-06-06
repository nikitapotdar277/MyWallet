window.onload = function() {

	var billtype = document.getElementById("billtype");
	var amount = document.getElementById("amount");
	var date = document.getElementById("date");
	var btn = document.getElementById("btn");
	var next = document.getElementById("next");
	var id = 1;
	
	function displayList() {
			allexpenses = JSON.parse(localStorage.getItem("expenses"));
			// console.log(allexpenses);
			var sum = 0;
			for (var i = 0; i < allexpenses.length; i++) {
				sum += parseInt(allexpenses[i].amount);
			}
			$.each(allexpenses, function(key,value) {
			$('tbody').append ( `<tr>
					<td class = "Date">${value.date}</td>
					<td class = "Category">${value.category}</td>
					<td class = "Amount">${value.amount}</td>
					</tr>`
					);
			 })
			$('tbody').append(`<tr>
			<td colspan = "2"> <b>TOTAL<b> </td>
			<th>${sum}</td>
			</tr>`);
		}
	displayList();

}
