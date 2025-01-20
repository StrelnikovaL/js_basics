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

function romanToInt(romanNumber) {
    let sum = 0;
    let arr = romanNumber.split("");
    arr.forEach((val, index, arr) => {
        currentNumber = signIntoNum(val);
        nextNumber = signIntoNum(arr[index+1]);
        sum += (currentNumber < nextNumber)? -currentNumber :  currentNumber;
    })
    return sum;
}
// Тестовые случаи
const tests = [
    {
        description: "Базовые римские цифры",
        cases: [
            { input: "I", expected: 1, message: "Одиночная цифра I" },
            { input: "V", expected: 5, message: "Одиночная цифра V" },
            { input: "X", expected: 10, message: "Одиночная цифра X" },
            { input: "L", expected: 50, message: "Одиночная цифра L" },
            { input: "C", expected: 100, message: "Одиночная цифра C" },
            { input: "D", expected: 500, message: "Одиночная цифра D" },
            { input: "M", expected: 1000, message: "Одиночная цифра M" }
        ]
    },
    {
        description: "Сложение (простые комбинации)",
        cases: [
            { input: "II", expected: 2, message: "Простое сложение II = 2" },
            { input: "VI", expected: 6, message: "Простое сложение VI = 6" },
            { input: "XV", expected: 15, message: "Простое сложение XV = 15" },
            { input: "XX", expected: 20, message: "Простое сложение XX = 20" },
            { input: "MDC", expected: 1600, message: "Сложение MDC = 1600" }
        ]
    },
    {
        description: "Вычитание (сложные комбинации)",
        cases: [
            { input: "IV", expected: 4, message: "Вычитание IV = 4" },
            { input: "IX", expected: 9, message: "Вычитание IX = 9" },
            { input: "XL", expected: 40, message: "Вычитание XL = 40" },
            { input: "XC", expected: 90, message: "Вычитание XC = 90" },
            { input: "CD", expected: 400, message: "Вычитание CD = 400" },
            { input: "CM", expected: 900, message: "Вычитание CM = 900" }
        ]
    },
    {
        description: "Комплексные числа",
        cases: [
            { input: "MMXXIV", expected: 2024, message: "Комплексное число MMXXIV = 2024" },
            { input: "MCMXCIX", expected: 1999, message: "Комплексное число MCMXCIX = 1999" },
            { input: "MMCDXLIV", expected: 2444, message: "Комплексное число MMCDXLIV = 2444" },
            { input: "MMMCMXCIX", expected: 3999, message: "Максимальное число MMMCMXCIX = 3999" }
        ]
    }
];

// Функция для запуска тестов
function runTests() {
    let totalTests = 0;
    let passedTests = 0;

    console.log("Начинаем тестирование функции romanToInt\n");

    tests.forEach(group => {
        console.log(`\n=== ${group.description} ===`);

        group.cases.forEach(testCase => {
            totalTests++;
            const result = romanToInt(testCase.input);
            const passed = result === testCase.expected;

            if (passed) {
                passedTests++;
                console.log(`✅ ${testCase.message}`);
            } else {
                console.log(`❌ ${testCase.message}`);
                console.log(`   Ожидалось: ${testCase.expected}, Получено: ${result}`);
            }
        });
    });

    console.log(`\n=== Итоги тестирования ===`);
    console.log(`Всего тестов: ${totalTests}`);
    console.log(`Успешно: ${passedTests}`);
    console.log(`Провалено: ${totalTests - passedTests}`);
    console.log(`Процент успешных: ${((passedTests / totalTests) * 100).toFixed(2)}%`);
}

// Запускаем тесты
runTests();