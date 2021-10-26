
function expand()
{	
	var amount = document.getElementById('amount').value;
	var from = document.getElementById('from_select').value;
	var to = document.getElementById('to_select').value;

	if(from!=to){
	
		document.getElementById('main_menu').style.height='260px';
		document.getElementById('answer_container').style.display='flex';

		document.getElementById('to_convert').innerHTML=(amount+" "+from);
		document.getElementById('converted_answer').innerHTML=(amount+" "+to);
		document.getElementById('conversion_rates').innerHTML=("1 "+from+" = w.xy "+to);
	}
	else{
		alert("Both the currencies cannot be same !");
	}
}
