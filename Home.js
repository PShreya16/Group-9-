
function expand()
{	
	var amount = document.getElementById('amount').value;
	var from = document.getElementById('from_select').value;
	var to = document.getElementById('to_select').value;

	if(from!=to){
		document.getElementById('rem_body').style.height='1050px';
		document.getElementById('main_menu').style.height='750px';
		document.getElementById('chart_div').style.height='474px';
		document.getElementById('chart_div').style.opacity='1';
		document.getElementById('answer_container').style.display='flex';
		document.getElementById('to_convert').innerHTML=(amount+" "+from);
		document.getElementById('converted_answer').innerHTML=(amount+" "+to);
		document.getElementById('conversion_rates').innerHTML=("1 "+from+" = w.xy "+to);
	}
	else{
		alert("Both the currencies cannot be same !");
	}
}
