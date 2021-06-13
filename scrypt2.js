// 2.определение типов данных x

let x = 1<2;
switch (typeof x) {
    case ('boolean'):
        console.log('x - имеет логический тип данных');
        break;
    case ("number"):
        console.log('x - число');
        break;
    case ('string'):
        console.log('x - строка');
        break;
    default:
        console.log('Тип x не определён');
}
