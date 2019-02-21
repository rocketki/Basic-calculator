var strEval = '0';

document.addEventListener("DOMContentLoaded", function(event) { 
	var bts = document.getElementsByClassName('normal');
	for (var i = bts.length - 1; i >= 0; i--) {
		bts[i].addEventListener("click", function() {
			console.log(this.innerHTML);

			if (strEval == '0') {
				strEval = this.innerHTML;
			} else {
				strEval += this.innerHTML;
			}

			document.getElementById('result').innerHTML = strEval;
		});		
	}

	document.getElementById('reset').addEventListener("click", reset);
	document.getElementById('calculate').addEventListener("click", calculate);
	document.getElementById('remove').addEventListener("click", remove);
});

function reset() {
	strEval = '0';
	document.getElementById('result').innerHTML = strEval;
}

function calculate() {
	var error = false;
	try {
		res = eval(strEval);
	}
	catch(err) {
		error = true;
		document.getElementById('result').innerHTML = err.name;
		console.log(err.name);
	}

	if (error == false) {
		res = eval(strEval);
		strEval = res;
		document.getElementById('result').innerHTML = res;
	}
}

function remove() {
	if (strEval.length > 0) {
		strEval = strEval.substring(0, strEval.length-1);
	}

	if (strEval.length == 0) {
		strEval = '0';
	}
	document.getElementById('result').innerHTML = strEval;
}