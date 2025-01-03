//  Напишите функцию для определения является ли число палиндромом:

function isPalindrom(num) {
    if (num < 0) {
        return false;
    }
    str = num.toString();
    left  = 0;
    right = str.length - 1;
    while (left < right) {
        if (str[left] != str[right]) {
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

let number1 = 121;
let number2 = -121;
let number3 = 10;
console.log(`Task 1:
\nNumber: ${number1}\nIs palindrom: ${isPalindrom(number1)}
\nNumber: ${number2}\nIs palindrom: ${isPalindrom(number2)}
\nNumber: ${number3}\nIs palindrom: ${isPalindrom(number3)}`);
