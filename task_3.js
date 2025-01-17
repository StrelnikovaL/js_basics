//Задача: Преобразование римских цифр в целое число

function signIntoNum(sign) {
    switch(sign) {
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
    }
}

function convertRomanToInt(romanNumber) {
    let sum = 0;
    let arr = romanNumber.split("");
    arr.forEach((val, index, arr) => {
        currentNumber = signIntoNum(val);
        nextNumber = signIntoNum(arr[index+1]);
        sum += (currentNumber < nextNumber)? -currentNumber :  currentNumber;
    })
    return sum;
}

let romanNumber1 = "XXVII";
let romanNumber2 = "XC";
let romanNumber3 = "XIV";
console.log(`Task 3:
\nRoman number: ${romanNumber1}\nResult: ${convertRomanToInt(romanNumber1)}
\nRoman number: ${romanNumber2}\nResult: ${convertRomanToInt(romanNumber2)}
\nRoman number: ${romanNumber3}\nResult: ${convertRomanToInt(romanNumber3)}`);