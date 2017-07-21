localStorage.setItem("cardPassword", res.data.code);

const cardRegister = function(){
	console.log("si esta entrando");
	$.post(url, {
		"phone": phone, 
		"cardNumber": cardNumber,
		"cardMonth": cardMonth,
		"cardYear": cardYear,
		"cardPassword": cardPassword
		}, (res)=>{
		console.log(res.message);
		if(res.message == "Tarjeta añadida correctamente"){
			location.href = "finalScreen.html";
		} else {alert(res.message)};
	});
};