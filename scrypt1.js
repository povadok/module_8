// 1.Проверка введенного числа

let input;
input = prompt ('Введите число');
input = +input;
if (isNaN(input) || typeof input !== 'number') {
  alert ('Упс, кажется, вы ошиблись')
} else if (input %2 == 0) {
    alert ('это четное число')
  } else {
    alert ('это нечетное число')
  }
