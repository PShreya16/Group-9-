var flag = 0;

const fromSelected = document.getElementById("from_selected");
const fromOptionsContainer = document.getElementById("from_options_container");
const fromOptionsList = fromOptionsContainer.querySelectorAll(".from-option");
const toSelected = document.getElementById("to_selected");
const toOptionsContainer = document.getElementById("to_options_container");
const toOptionsList = toOptionsContainer.querySelectorAll(".to-option");

toSelected.addEventListener("click", () => {
    toOptionsContainer.classList.toggle("active");
});
toOptionsList.forEach(element => {
    element.addEventListener("click", () => {
        toSelected.innerHTML = element.querySelector("label").innerHTML;
        if (flag == 1) {
            calculate();
        }
    })
});

document.addEventListener("click", (event) => {
    if (toOptionsContainer.classList.contains("active")) {
        if (event.target.closest("#to_options_container") || event.target.closest("#to_selected")) {} else {
            toOptionsContainer.classList.remove("active");
        }
    }
});


fromSelected.addEventListener("click", () => {
    fromOptionsContainer.classList.toggle("active");
});
fromOptionsList.forEach(element2 => {
    element2.addEventListener("click", () => {
        fromSelected.innerHTML = element2.querySelector("label").innerHTML;
        if (flag == 1) {
            calculate();
        }
    })
});

document.addEventListener("click", (event) => {
    if (fromOptionsContainer.classList.contains("active")) {
        if (event.target.closest("#from_options_container") || event.target.closest("#from_selected")) {} else {
            fromOptionsContainer.classList.remove("active");
        }
    }
});

function expand() {
    document.getElementById('rem_body').style.height = '1050px';
    document.getElementById('main_menu').style.height = '750px';
    document.getElementById('chart_div').style.height = '474px';
    document.getElementById('chart_div').style.opacity = '1';
    document.getElementById('chart_div').style.display = 'flex';
    document.getElementById('myChart').style.height = '474px';
    document.getElementById('myChart').style.opacity = '1';
    flag = 1;
    calculate();
}

// document.getElementById('from_select').addEventListener("change", () => { if (flag == 1) { calculate(); } })
// document.getElementById('to_select').addEventListener("change", () => { if (flag == 1) { calculate(); } })
document.getElementById('amount').addEventListener("keyup", () => { if (flag == 1) { calculate(); } })


function calculate() {
    let from = document.getElementById('from_selected').innerHTML.substring(0, 3);
    // from = from.substring(0,4);
    // console.log(from);
    let to = document.getElementById('to_selected').innerHTML.substring(0, 3);
    // let to = document.getElementById('to_select').value;
    let amount = document.getElementById('amount').value;

    fetch(`http://api.exchangeratesapi.io/v1/latest?access_key=d2d2d6677c8b05a6b21eebf39b1744cc`)
        .then((res) => res.json())
        .then((data) => {
            const rate1 = data.rates[from];
            const rate2 = data.rates[to];
            const converted_rate = rate2 / rate1;
            const final_amount = amount * converted_rate;
            console.log(data);
            document.getElementById('answer_container').style.height = '110px';
            document.getElementById('answer_container').style.opacity = '1';
            document.getElementById('to_convert').innerHTML = (amount + " " + from + " =");
            document.getElementById('converted_answer').innerHTML = (final_amount + " " + to);
            document.getElementById('conversion_rates').innerHTML = ("1 " + from + " = " + converted_rate + " " + to);
        });
}

document.getElementById("swap_button").addEventListener("click", () => {
    let temp = document.getElementById("from_selected").innerHTML;
    document.getElementById("from_selected").innerHTML = document.getElementById("to_selected").innerHTML;
    document.getElementById("to_selected").innerHTML = temp;
    if (flag == 1) { calculate(); }

})

const date_array = [];

var current_date = new Date();
current_date = current_date.toISOString();
var year = current_date.substring(0, 4);
var month = current_date.substring(5, 7);
var day = current_date.substring(8, 10);

var i = 0;

for (i = 0; i < 60; i++) {

    var date = (year + "-" + month + "-" + day);

    date_array[i] = date;

    day = day - 1;

    day = day.toString();
    month = month.toString();

    if (day.length < 2) {
        day = "0" + day;
    }
    if (month.length < 2) {
        month = "0" + month;
    }
    if (day < 1) {
        month = month - 1;
        if (month < 1) {
            month = 12;
            year = year - 1;
        }

        if (month == 2) {
            day = 28;
        } else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
            day = 31;
        } else {
            day = 30;
        }
    }
}

let array = [];
let filtered_array = [];
tan();

function tan() {
    for (i = 0; i < date_array.length; i++) {
        fetch(`http://api.exchangeratesapi.io/v1/${date_array[i]}?access_key=d2d2d6677c8b05a6b21eebf39b1744cc`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                // console.log(data.date+" "+data.rates.INR);
                array.push((data.timestamp) + " " + (data.rates.INR));
                array.sort();
            });
    }
}

function tan2() {
    for (i = 0; i < array.length; i++) {
        filtered_array[i] = array[i].substring(11, 20);
    }

}
setTimeout(tan2, 5000);

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: date_array.reverse(),
        datasets: [{
            label: "Graph",
            data: filtered_array,
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
