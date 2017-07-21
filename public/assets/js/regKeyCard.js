const $lastDigits = $('#number');
const $send = $('#send');
const $form = $('#form');
const url = 'http://localhost:3000/api/registerCard';

const loadPage = ()=>{
	$form.submit((e)=>{
		e.preventDefault();
		validate();
	});
	$send.click(validate);
}

localStorage.setItem("cardPassword", $lastDigits.val());

const validate = ()=>{
	if($lastDigits.val().length == 4){
		cardRegister();
	}
}

const cardRegister = function(){
	$.post(url, {
		"phone": localStorage.getItem('numero'), 
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