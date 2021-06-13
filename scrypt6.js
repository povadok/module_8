// 6. Сравнение элементов массива

let arr = [1, 1, 1, 1, 3];
let arrLenght = arr.length;
var bool = true;
for (let i = 0; i < arrLenght-1; i++) {  
  if (arr[1] != arr[i+1]) {   
    console.log('в массиве разные значения');
    bool = false;
    break;
  } 
}
if (bool == true) {
  console.log('в массиве одинаковые значения');
}