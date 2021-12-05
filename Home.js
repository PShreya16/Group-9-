var flag = 0;
function expand() {
	document.getElementById('rem_body').style.height = '1050px';
	document.getElementById('main_menu').style.height = '750px';
	document.getElementById('chart_div').style.height = '474px';
	document.getElementById('chart_div').style.opacity = '1';
	document.getElementById('myChart').style.height = '474px';
	document.getElementById('myChart').style.opacity = '1';
	flag = 1;
	calculate();
}

document.getElementById('from_select').addEventListener("change", () => { if (flag == 1) { calculate(); } })
document.getElementById('to_select').addEventListener("change", () => { if (flag == 1) { calculate(); } })
document.getElementById('amount').addEventListener("change", () => { if (flag == 1) { calculate(); } })


function calculate() {
	var from = document.getElementById('from_select').value;
	var to = document.getElementById('to_select').value;
	var amount = document.getElementById('amount').value;

	fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=4953fc5871821ceed68ecd0dffb4e4b0`)
		.then((res) => res.json())
		.then((data) => {
			const rate1 = data.rates[from];
			const rate2 = data.rates[to];
			const converted_rate = rate2 / rate1;
			const final_amount = amount * converted_rate;
			document.getElementById('answer_container').style.height = '110px';
			document.getElementById('answer_container').style.opacity = '1';
			document.getElementById('to_convert').innerHTML = (amount + " " + from + " =");
			document.getElementById('converted_answer').innerHTML = (final_amount + " " + to);
			document.getElementById('conversion_rates').innerHTML = ("1 " + from + " = " + converted_rate + " " + to);
		});


}


const date_array = [];
var current_date = new Date();
current_date = current_date.toISOString();
var year = current_date.substring(0, 4);
var month = current_date.substring(5, 7);
var day = current_date.substring(8, 10);
var i = 0, j = 0;
for (i = 0; i < 5; i++) {
	// if(day.length<2){
	// 	day="0"+day;
	// }
	// if(month.length<2){
	// 	month="0"+month;
	// }
	var date = (year + "-" + month + "-" + day);
	date_array[i] = date;
	// fetch(`http://api.exchangeratesapi.io/v1/${date}?access_key=d2d2d6677c8b05a6b21eebf39b1744cc`)
	// .then((res) => res.json())
	// .then((data) => {
	// 	console.log(data.date+" "+data.rates.INR);
	// });
	day = day - 1;
	if (day < 1) {
		month = month - 1;
		if (month < 1) {
			month = 12;
			year = year - 1;
		}

		if (month == 2) {
			day = 28;
		}
		else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
			day = 31;
		} else {
			day = 30;
		}
	}
}


past_rates = [123, 123, 1, 3, 13, 1, 313, 13, 12, 23, 1, 3]
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: date_array,
		datasets: [{
			label: "Graph",
			data: past_rates,
			fill: false,
			backgroindColor: 'rgba(0,0,0,1)',
			borderColor: [
				'rgba(255, 99, 132, 1)'
			],
			borderWidth: 3,
			lineTension: 0
		}]
	},
});
