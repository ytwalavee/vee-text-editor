function run() {
	var run = document.getElementById("code-box").value;
	var result_box = document.getElementById("result");
	result_box.innerHTML = run;
	var code_main_box = document.getElementById("code-main-box");
	code_main_box.style.display = "none";
	var result_main_box = document.getElementById("result-main-box");
	result_main_box.style.display="block";
	result_main_box.setAttribute ("class","animate__animated animate__slideInRight");
	var run_code_button = document.getElementById("run-code-button")
	run_code_button.style.display = "none"
	var return_code_button = document.getElementById("return-code-button");
	return_code_button.style.display = "block"
}

function back(){
	var result_main_box = document.getElementById("result-main-box");
	result_main_box.style.display="none";
	var code_main_box = document.getElementById("code-main-box");
	code_main_box.setAttribute("class","animate__animated animate__slideInLeft")
	code_main_box.style.display = "block";
	var return_code_button = document.getElementById("return-code-button");
	return_code_button.style.display = "none"
	var run_code_button = document.getElementById("run-code-button")
	run_code_button.style.display = "block"
}