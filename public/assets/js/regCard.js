const $card = $('#number');
const $reactiveInput = $('#reactivate');


const loadPage= ()=>{
	$card.keyup(disabledInput);
	$reactiveInput.click(enabledInput);
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
	$card.attr('value') == ''
	$card.removeAttr('disabled');
}

$(document).ready(loadPage);