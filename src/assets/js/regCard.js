const url = 'http://localhost:3000/api/registerCard';
const $card = $('#number');
const $reactiveInput = $('#reactivate');
const $form = $('#form');
const $send = $('#send');
const $month = $('#month');
const $year = $('#year'); 

const loadPage= ()=>{
	$form.submit((e)=>{
		e.preventDefault();
		validateFields();
	})
	$card.keyup(disabledInput);
	$reactiveInput.click(enabledInput);
	emptyFields();
	$card.keyup(emptyFields);
	$month.keyup(emptyFields);
	$year.keyup(emptyFields);
	$send.submit(validateFields);
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

const validateCard = ()=>{

}

const validateMonth = ()=>{

}

const validateYear = ()=>{

}

const validateFields = (e)=>{
	e.preventDefault();
	if(validateCard() && validateMonth() && validateYear()){
		saveData();
		location.href = 'regKeyCard.html';
	} 
}

const saveData = function(){
	localStorage.setItem("cardNumber", $card.val()); 
	localStorage.setItem("cardMonth", $month.val()); 
	localStorage.setItem("cardYear", $year.val());  
};
$(document).ready(loadPage);