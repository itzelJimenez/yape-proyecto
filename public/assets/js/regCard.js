const $card = $('#number');
const $reactiveInput = $('#reactivate');
const $form = $('#form');
const $send = $('#send');
const $month = $('#month');
const $year = $('#year'); 

const loadPage= ()=>{
	$card.keyup(disabledInput);
	$reactiveInput.click(enabledInput);
	emptyFields();
	$card.keyup(emptyFields);
	$month.keyup(emptyFields);
	$year.keyup(emptyFields);
}

const disabledInput=()=>{
	if ($card.val().length == 16) {
		return true;
	} else if($card.val().length > 16){
		$reactiveInput.removeClass('hide');
		$card.attr('disabled', true);
	}
}

const enabledInput = ()=>{
	$card.val(" ");
	$card.removeAttr('disabled');
	$reactiveInput.addClass('hide');
}

const emptyFields = ()=>{
	if($card.val().length == 0 ||  $month.val().length == 0 || $year.val().length == 0 ){
		$send.addClass('disabled');
	}else {
		$send.removeClass('disabled');
	}
}

$(document).ready(loadPage);