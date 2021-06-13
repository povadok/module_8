// 9. Анализ массива через функцию

function analysArr(arr) {

    let odd = 0;
    let even = 0;
    let numberNull = 0;
    let typeNull = 0;
    let str = 0;
    let undef = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (arr[i] % 2 === 0 && arr[i] != 0 && arr[i] != null) {even += 1};
      if (arr[i] % 2 != 0 && typeof (arr[i]) != 'string') {odd += 1};
      if (arr[i] === 0 ) {numberNull += 1};
      if (arr[i] === null ) {typeNull += 1};
      if (arr[i] === 'undefined') {undef += 1};
      if (typeof (arr[i]) === 'string') {str += 1};
    }
    
    console.log('четных элементов ' + even);
    console.log('нечетных элементов ' + odd);
    console.log('нолей ' + numberNull);
    console.log('значений null ' + typeNull);
    console.log('строковых элементов ' + str);
    console.log('неопределенных элементов ' + undef);
    }
    let arr = [1,2,3,6,'g', null, 0,0];
    analysArr(arr);