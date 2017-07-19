
const $form = $('#form');
const $send = $('#send');
const $phone = $('#phone');

const loadPage = () =>{
	$form.submit(validate);
	$phone.keydown(validate);
}


const validate = ()=>{

	let $phoneVal = $phone.val();
	let $checkbox = $('#test1').is(':checked');
	console.log($phoneVal.length);
	if($phoneVal.length == 8 && $checkbox){
		console.log($checkbox);
		$send.removeClass('disabled');
	} else {
		$send.addClass('disabled');
	}
}
$(document).ready(loadPage);