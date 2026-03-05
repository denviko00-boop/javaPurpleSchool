const role = 'manager'
switch (role) {
	case 'manager':
		console.log('manager')
    break
	case 'admin':
		console.log('admin')
		break

	default: console.log('I do not know you')
		break
}

const num = 1
switch (true) {
	case num > 0:
		console.log('Положительный')
		break
	case num < 0:
		console.log('Отрицательный')
		break
	default: console.log('null')
		break
}


const bmw = 100000
const mazda = 20000
const budget = 30000
console.log(budget > bmw ? 'Покупаем бмв' : budget>mazda ? 'покупаем мазду' : 'катаемся на маршрутке')





const question = prompt('Сколько будет 7+ или -15?')

switch (true) {
  case (question) === 'Я не робот':
    case Number(question) === 22:
    case Number(question) === -8:
    console.log('Succesful')
    break;

  default: console.log('ТЫ РОБОТ')
    break;
}