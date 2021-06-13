// 3. Переворот строки

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

let input = prompt ('Введите выражение чтобы перевернуть его');
let newString = reverseString(input);
console.log(newString);
