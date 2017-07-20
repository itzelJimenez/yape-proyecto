const url = 'http://localhost:3000/api/resendCode';
const originalCode = localStorage.getItem('codigo');
const $sendCode = $('submit-code');
const num = localStorage.getItem('numero');

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
	});
};

const validateCode = ()=>{
	let inputCode = $('#code').val();
	if(inputCode == originalCode){
		location.href = "regUser.html";
	} else {
		newCode();
	}
};


const sendNewCode = ()=>{
	setInterval(() => {validateCode()}, 21000);
};
$(document).ready(loadPage);