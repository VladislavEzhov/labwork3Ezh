
var trigger = 0, name = undefined, age, sex, adress, education, mathematic, asu, cutting, programming, wish; // обьявляем переменные которые понадобятся в ходе работы
document.getElementById("startTest").addEventListener("click", test)
document.getElementById("edit").addEventListener("click", edit) // добавляем слушателя события click к элементу с id startTest
function test() { // Функция которая опрашивает пользователя


	name = prompt("Введите имя");
	while (typeof (name) !== 'string') {
		name = prompt("Введите имя");
	}
	age = prompt("Введите возраст");
	sex = prompt("Введите пол");
	adress = prompt("Введите адрес");
	education = confirm("У вас есть высше образование?");
	mathematic = confirm("Вы знаете математику?");
	asu = confirm("Вы знаете АСУ ТП?");
	cutting = confirm("Вы знаете теорию резания?");
	programming = confirm("Умеете программировать?");
	wish = confirm("Желаете работать?")
	writeToPage();
}



function writeToPage() { // функция которая записывает значение из наших переменных в элементы на странице
	/*
	document.getElementById("name") - возвращает элемент с id name
	document.getElementById("name").innerText - текст этого элемента
	У ЧЕКБОКСОВ НЕТ ТЕКСТА, поэтому мы пишем в свойство checked значения true или false
	document.getElementById("education").checked = education;
	*/

	$("#name").val(name)
	$("#age").val(age)
	$("#sex").val(sex)
	$("#adress").val(adress)
	$("#adress").focus();
	$("#sex").focus();
	$("#age").focus();
	$("#name").focus();
	document.getElementById("education").checked = education;
	document.getElementById("mathematic").checked = mathematic;
	document.getElementById("asu").checked = asu;
	document.getElementById("cutting").checked = cutting;
	document.getElementById("programming").checked = programming;
	document.getElementById("wish").checked = wish;
	trigger = 1;
	myFunction();

	document.getElementById("startTest").style.display = "none";
	document.getElementById("edit").style.display = "block";
}
x.style.display = "none";
function myFunction() { // эта функция автоматически проверяет подходит ли наш кандидат: "кандидаты со знанем АСУ ТП и высшим
	//образованием".
	var x = document.getElementById("div1");
	if (trigger == 1) {
		if (document.getElementById("programming").checked == true && document.getElementById("mathematic").checked == true) {
			var text = '<p class="stroke">ВЫ НАМ ПОДОШЛИ!</p>'
			x.innerHTML = text;
			x.style.display = "block";
		}
		else {
			var text = '<p class="stroke">ВЫ НАМ НЕ НУЖНЫ!</p>'
			x.innerHTML = text;
		}
	}
}

function edit() {
	name = prompt("Введите имя");
	age = prompt("Введите возраст");
	sex = prompt("Введите пол");

	writeToPage();
}
