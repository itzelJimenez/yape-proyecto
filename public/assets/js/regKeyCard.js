const $lastDigits = $('#last-digits');
const $send = $('#send');
const $form = $('#form');

const loadPage = ()=>{
	$form.submit((e)=>{
		e.preventDefault();
		validate();
	});
	$send.click(validate);
}

localStorage.setItem("cardPassword", res.data.code);

const validate = ()=>{
	if($lastDigits.val().length == 4){
		alert("true");
		cardRegister();
	}
}

const cardRegister = function(){
	console.log("si esta entrando");
	$.post(url, {
		"phone": phone, 
		"cardNumber": localStorage.getItem('cardNumber'),
		"cardMonth": localStorage.getItem('cardMonth'),
		"cardYear": localStorage.getItem('cardYear'),
		"cardPassword": localStorage.getItem('cardPassword')
		}, (res)=>{
		if(res.message == "Tarjeta añadida correctamente"){
			location.href = "finalScreen.html";
		} else {alert(res.message)};
	});
};

$(document).ready(loadPage);