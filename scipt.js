//1 задание

function max(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(max(3,5));

//2 задание

let name = "Влад";
let admin;

admin = name;

console.log(admin);

//3 задание

function Age() {
    while (true) {
        let age = prompt('Укажите ваш возраст', 'Введите возраст');
        if (confirm('Вам ' + age + ' лет?')) {
            break;
        }
    } 
}

Age();

//-----------------------------------------

let lastName;

document.getElementById("change-last-name").addEventListener("click", change);

function change() {
    lastName = document.getElementById("last-name-input").value;
    document.getElementById("last-name").innerHTML = '<p class="last-name">' + lastName + '</p>';
    document.getElementById("last-name-input").value = '';
}

