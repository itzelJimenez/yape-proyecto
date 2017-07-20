const url = 'http://localhost:3000/api/createUser';
const phone = localStorage.getItem('numero');
const $name = $('#name').val();
const $email = $('#email').val();
const $password = $('#password').val();
const $form = $('#form');
const $createUser = $('#createUser');

const loadPage = ()=>{
	$form.submit((e)=>{
		e.preventDefaut();
		validate();
	})
	$createUser.click(validate);
};

const validate = ()=>{

};

const userRegister = ()=>{

};
$(document).ready(loadPage);