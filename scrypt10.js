// 10. проверка простого числа

function prime(number) {
    number = Math.abs(number)
    let sqr = Math.sqrt(number);
    let round = Math.ceil(sqr);
    if (number == 0 || number == 1) {
      alert('число не является простым ');
      return;
    }
    if (number  == 2) {
          alert(' число простое ');
          return;
    }
    for (i = 2; i <= round; i++) {
      if (number % i == 0) {
        alert('число не является простым ');
        return;
      }
    }
    alert('число простое ');
  }
  let number = prompt('введите число до 1000');
  if (number > 1000) {
    alert('данные не верны');
  } else {
    prime(number);
  }