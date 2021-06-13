// 4. Случайное число


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  let min;
  let max;
  let random;
  alert('Введите диапазон');
  min = +prompt('Введите минимум диапазона');
  max = +prompt('Введите максимум диапазона');
  random = getRandomInt(min, max);
  alert('случайное число вашего диапазона ' + random);