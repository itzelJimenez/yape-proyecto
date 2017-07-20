const url = 'http://localhost:3000/api/createUser';
const phone = localStorage.getItem('numero');
const $name = $('#name');
const $email = $('#email');
const $password = $('#password');
const $form = $('#form');
const $createUser = $('#createUser');

const loadPage = ()=>{
	$form.submit(validateFields);
	emptyFields();
	$name.keyup(emptyFields);
	$email.keyup(emptyFields);
	$password.keyup(emptyFields);
	$createUser.click(validateFields);
};

const emptyFields = ()=>{
	if($name.val().length == 0 ||  $email.val().length == 0 || $password.val().length == 0 ){
		$createUser.addClass('disabled');
	}else {
		$createUser.removeClass('disabled');
	}
}

const validateEmail = ()=>{
	let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
	if (emailRegex.test($email.val())) {
      return true;
    } else {
      alert("Ingresa un email valido");
    }
};

const validatePassword = ()=>{
	if($password.val().length > 6){
		alert("Recuerda que debes ingresar un password de 6 dígitos");
	} else if ($password.val().length < 6){
		alert("Recuerda que debes ingresar un password de mínimo 6 dígitos");
	} else if($password.val().length == 6){ return true};
}

const validateName = ()=>{
	let nameRegex =  /[A-Za-zñÑ-áéíóúÁÉÍÓÚ\s\t-]/;
	if(nameRegex.test($name.val())){
		return true;
	} else{
		alert("Por favor ingresa un nombre válido");
	}
}

const validateFields = (e)=>{
	e.preventDefault();
	if(validateName() && validateEmail() && validatePassword()){
		userRegister();
	} 
}
 
const userRegister = function(){
	console.log("si esta entrando");
	$.post(url, {
		"phone": phone, 
		"email": $email.val(),
		"password": $password.val(),
		"name": $name.val()
		}, (res)=>{
		console.log(res.message);
		if(res.message == "Usuario creado con éxito"){
			location.href = "succes.html";
		} else {alert(res.message + ", por favor ingresa un número válido.")};
	});
};

$(document).ready(loadPage);