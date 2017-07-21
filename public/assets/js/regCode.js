const url = 'http://localhost:3000/api/resendCode';
const $sendCode = $('#submit-code');
const num = localStorage.getItem('numero');
var originalCode = localStorage.getItem('codigo');
var newGeneratedCode;


const loadPage = ()=>{
	$('#number').text(num);
	alert("Tu código de verificación es: " + originalCode);
	sendNewCode();
	$sendCode.submit((e)=>{
		e.preventDefault();
		validateCode();
	});
}

const newCode = ()=>{
	$.post(url, {'phone': num}, (req)=>{
	console.log(req);
		const succes = req.success;
		alert("Tu nuevo código es: "+req.data);
		newGeneratedCode = req.data;
		originalCode = newGeneratedCode;
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


const sendNewCode = ()=>{
	setInterval(() => {validateCode()}, 21000);
};
$(document).ready(loadPage);