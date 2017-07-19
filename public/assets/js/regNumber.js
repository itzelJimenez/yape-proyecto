const url = 'http://localhost:3000/api/registerNumber';
const $form = $('#form');
const $send = $('#send');
const $phone = $('#phone');
const $checkbox = $('#test1');

const loadPage = () =>{
	$form.submit(validate);
	$phone.keydown(validate);
	$send.click(apiRequest);
	$checkbox.click(validate);
}


const validate = ()=>{
	let $phoneVal = $phone.val();
	let $checked = $checkbox.is(':checked');
	console.log($phoneVal.length);
	if( $phoneVal.length == 10 && $checked  ){
		console.log($checkbox);
		$send.removeClass('disabled');
	} else {
		$send.addClass('disabled');
	}
}

const apiRequest = () =>{

}
$(document).ready(loadPage);