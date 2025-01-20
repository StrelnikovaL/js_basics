// Функция проверки палиндрома
function isPalindrome(number) {
    if (number < 0) {
        return false;
    }
    str = number.toString();
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

// Тестовые случаи
const tests = [
    {
        description: "Базовые палиндромы",
        cases: [
            { input: 121, expected: true, message: "Простой трехзначный палиндром" },
            { input: 1221, expected: true, message: "Четырехзначный палиндром" },
            { input: 12321, expected: true, message: "Пятизначный палиндром" },
            { input: 11, expected: true, message: "Двузначный палиндром" }
        ]
    },
    {
        description: "Не палиндромы",
        cases: [
            { input: 123, expected: false, message: "Простое трехзначное число" },
            { input: 1234, expected: false, message: "Четырехзначное число" },
            { input: 12345, expected: false, message: "Пятизначное число" },
            { input: 10, expected: false, message: "Двузначное число" }
        ]
    },
    {
        description: "Специальные случаи",
        cases: [
            { input: 0, expected: true, message: "Ноль" },
            { input: 1, expected: true, message: "Однозначное число" },
            { input: 9, expected: true, message: "Однозначное число 9" },
            { input: -121, expected: false, message: "Отрицательный палиндром" }
        ]
    },
    {
        description: "Числа, заканчивающиеся на ноль",
        cases: [
            { input: 10, expected: false, message: "Десять" },
            { input: 100, expected: false, message: "Сто" },
            { input: 1000, expected: false, message: "Тысяча" },
            { input: 10001, expected: true, message: "Палиндром с нулями внутри" }
        ]
    },
    {
        description: "Длинные палиндромы",
        cases: [
            { input: 1234321, expected: true, message: "Семизначный палиндром" },
            { input: 12344321, expected: true, message: "Восьмизначный палиндром" },
            { input: 1234554321, expected: true, message: "Десятизначный палиндром" },
            { input: 1234567890, expected: false, message: "Длинное не палиндромное число" }
        ]
    },
    {
        description: "Палиндромы с повторяющимися цифрами",
        cases: [
            { input: 111, expected: true, message: "Все цифры одинаковые" },
            { input: 11111, expected: true, message: "Пять одинаковых цифр" },
            { input: 1111111, expected: true, message: "Семь одинаковых цифр" },
            { input: 122222221, expected: true, message: "Палиндром с повторяющимися цифрами" }
        ]
    }
];

// Функция для проверки корректности длины числа
function testNumberLength() {
    console.log("\n=== Тестирование вспомогательной функции numberLength ===");
    const lengthTests = [
        { input: 0, expected: 0 },
        { input: 1, expected: 1 },
        { input: 12, expected: 2 },
        { input: 123, expected: 3 },
        { input: -123, expected: 3 },
        { input: 1000, expected: 4 }
    ];

    lengthTests.forEach(test => {
        const result = isPalindrome(test.input);
        const passed = result === test.expected;
        if (passed) {
            console.log(`✅ Длина числа ${test.input} корректна`);
        } else {
            console.log(`❌ Ошибка для числа ${test.input}`);
            console.log(`   Ожидалось: ${test.expected}, Получено: ${result}`);
        }
    });
}

// Функция для запуска тестов
function runTests() {
    let totalTests = 0;
    let passedTests = 0;

    console.log("Начинаем тестирование функции isPalindrome\n");

    // Сначала тестируем вспомогательную функцию
    testNumberLength();

    // Затем тестируем основную функцию
    tests.forEach(group => {
        console.log(`\n=== ${group.description} ===`);

        group.cases.forEach(testCase => {
            totalTests++;
            const result = isPalindrome(testCase.input);
            const passed = result === testCase.expected;

            if (passed) {
                passedTests++;
                console.log(`✅ ${testCase.message}`);
                console.log(`   Число: ${testCase.input}`);
            } else {
                console.log(`❌ ${testCase.message}`);
                console.log(`   Число: ${testCase.input}`);
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