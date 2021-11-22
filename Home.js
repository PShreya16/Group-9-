var flag=0;
function expand(){
	document.getElementById('rem_body').style.height='1050px';
	document.getElementById('main_menu').style.height='750px';
	document.getElementById('chart_div').style.height='474px';
	document.getElementById('chart_div').style.opacity='1';
	flag=1;
	calculate();
}

document.getElementById('from_select').addEventListener("change",()=>{if(flag==1){calculate();}})
document.getElementById('to_select').addEventListener("change",()=>{if(flag==1){calculate();}})
document.getElementById('amount').addEventListener("change",()=>{if(flag==1){calculate();}})


function calculate() {
	var from = document.getElementById('from_select').value;
	var to = document.getElementById('to_select').value;
	var amount = document.getElementById('amount').value;
	
	fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=d2d2d6677c8b05a6b21eebf39b1744cc`)
	.then((res) => res.json())
			.then((data) => {
				const rate1 = data.rates[from];
				const rate2 = data.rates[to];
			    const converted_rate = rate2/rate1;
				const final_amount = amount * converted_rate;       
				document.getElementById('answer_container').style.height='100px';
				document.getElementById('answer_container').style.opacity='1';
				document.getElementById('to_convert').innerHTML=(amount+" "+from+" =");
				document.getElementById('converted_answer').innerHTML=(final_amount+" "+to);
				document.getElementById('conversion_rates').innerHTML=("1 "+from+" = "+converted_rate+" "+to);
			});
			
			
		}
	
		
		const date_array = [];
		var current_date = new Date();
		current_date = current_date.toISOString();
		var year = current_date.substring(0,4);
		var month = current_date.substring(5,7);
		var day = current_date.substring(8,10);
		var i = 0, j= 0;
		for(i=0; i<7; i++){
			var date = (year+"-"+month+"-"+day);
			date_array[i]=date;
			console.log(date);
			fetch(`http://api.exchangeratesapi.io/v1/${date}?access_key=d2d2d6677c8b05a6b21eebf39b1744cc`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.date+" "+data.rates.INR);
			});
		day = day-1;
		
		if(day<1){
			month = month-1;
			if(month<1){
				month = 12;
				year=year-1;
			}
			
			if(month==2){
				day=28;
			}
			else if (month==1||month==3||month==5||month==7||month==8||month==10||month==12) {
				day=31;
			} else {
				day=30;
			}
		}
	}	
	console.log(date_array);
	// for(i=0;i<7;i++){
	// 		fetch(`http://api.exchangeratesapi.io/v1/${date_array[i]}?access_key=d2d2d6677c8b05a6b21eebf39b1744cc`)
	// 		.then((res) => res.json())
	// 			.then((data) => {
	// 			console.log(data.date+" "+data.rates.INR);

	// 		});
	// }

	const ctx = document.getElementById('myChart').getContext('2d');
	const myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: [date_array[6],date_array[5], date_array[4],date_array[3],date_array[2],date_array[1],date_array[0]],
			datasets: [{
				label: "Graph",
				data: [1,6,3,21,5,-2,7],
				fill: false,
					
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)' ,
					'rgba(0,0,0,1)'
				],
				borderWidth: 3
			}]
		},
		options: {
			scales: {
				y: {
				}
			}
		}
	});
