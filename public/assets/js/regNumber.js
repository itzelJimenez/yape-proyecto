const url = 'http://localhost:3000/api/registerNumber';
const $form = $('#form');
const $send = $('#send');
const $phone = $('#phone');
const $checkbox = $('#test1');

const loadPage = () =>{
	$form.submit(prevent);
	$phone.keydown(validate);
	$checkbox.click(validate);
	$send.click(apiRequest);
}

const prevent = (e) =>{
	e.preventDefaut();
}
const validate = ()=>{
	let $phoneVal = $phone.val();
	let $checked = $checkbox.is(':checked');

	if( $phoneVal.length == 10 && $checked  ){

		$send.removeClass('disabled');
	} else {
		$send.addClass('disabled');
	}
}

const apiRequest = () =>{
	$.post(url, {"phone": $phone.val(), "terms": true}, (res)=>{
		if(res.message == "Usuario válido"){
			location.href = "regCode.html";
		} else (alert(res.message + "por favor ingresa un número válido"));
	});;
}
$(document).ready(loadPage);