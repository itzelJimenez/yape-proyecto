const url = 'http://localhost:3000/api/registerNumber';
const $form = $('#form');
const $send = $('#send');
const $phone = $('#phone');
const $checkbox = $('#test1');

const loadPage = () =>{
	$form.submit((e)=>{
		e.preventDefaut();
		apiRequest();
	});
	$phone.keydown(validate);
	$checkbox.click(validate);
	$send.click(apiRequest);
}

const prevent = (e) =>{
	e.preventDefaut();
};

const validate = ()=>{
	let $phoneVal = $phone.val();
	let $checked = $checkbox.is(':checked');

	if( $phoneVal.length == 10 && $checked  ){
		$send.removeClass('disabled');
				return true;

	} else {
		$send.addClass('disabled');
	}
};

const apiRequest = () =>{
	if (validate()) {
		$.post(url, {"phone": $phone.val(), "terms": true}, (res)=>{
			if(res.message == "Usuario válido"){
				location.href = "regCode.html";
				getCode(res)
			} else {alert(res.message + ", por favor ingresa un número válido.")};
		});
	} else {alert("Recuerda que debes llenar los campos adecuadamente.");}
};

const getCode = (res) =>{
	localStorage.setItem("codigo", res.data.code); 
	localStorage.setItem('numero', res.data.phone);
};

$(document).ready(loadPage);