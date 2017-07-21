const url = 'http://localhost:3000/api/resendCode';
const $sendCode = $('#submit-code');
const $time = $('#time');
const num = localStorage.getItem('numero');
var originalCode = localStorage.getItem('codigo');
var newGeneratedCode;
var accountant = 21;

const loadPage = ()=>{
	timer();
	$('#number').text(num);
	alert("Tu código de verificación es: " + originalCode);
	$sendCode.submit((e)=>{
		e.preventDefault();
		validateCode();
	});
}

const newCode = ()=>{
	$.post(url, {'phone': num}, (req)=>{
		const succes = req.success;
		alert("Tu nuevo código es: "+req.data);
		newGeneratedCode = req.data;
		originalCode = newGeneratedCode;
		accountant = 22;
	});
};

const validateCode = ()=>{
	let inputCode = $('#code').val();
	if(inputCode == originalCode){
		location.href = "regUser.html";
	} else if (inputCode != originalCode){
		alert("El código ingresado no coincide.");
		newCode();
	}
};


/*const sendNewCode = ()=>{
	setInterval(() => {validateCode();}, 21000);
};*/

const timer = ()=>{
	setInterval(()=>{
		if(accountant > 0){
			accountant = accountant-1;
			$time.text(accountant);
		} else if(accountant == 0){
			newCode();
			accountant = 22;
		};
	}, 1000)
	
}
$(document).ready(loadPage);