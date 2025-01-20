function validBrackets(str) {
    let arr = str.split("");
    let stack = [];
    if (arr[0] === "}" || arr[0] === ")" || arr[0] === "]") {
        return false;
    } 
    let i = 0;
    while (i < arr.length) {
        curElem = arr[i];
        if (curElem === "{" || curElem === "(" || curElem === "[" ) {
            stack.push(curElem);
        } else {
            lastElem = stack.pop();
            if (curElem === "}" && lastElem !== "{") {
                return false;
            } else if (curElem === ")" && lastElem !== "(") {
                return false 
            } else if (curElem === "]" && lastElem !== "[") {
                return false;
            }
        }
        i ++;
    }
    if (stack.length === 0) {
        return true;
    }
    return false;
}

// Тестовые случаи
const tests = [
    {
        description: "Простые правильные комбинации",
        cases: [
            { input: "()", expected: true, message: "Простые круглые скобки" },
            { input: "[]", expected: true, message: "Простые квадратные скобки" },
            { input: "{}", expected: true, message: "Простые фигурные скобки" },
            { input: "([{}])", expected: true, message: "Вложенные скобки разных типов" }
        ]
    },
    {
        description: "Сложные правильные комбинации",
        cases: [
            { input: "([]){}}", expected: false, message: "Лишняя закрывающая скобка" },
            { input: "({[]})", expected: true, message: "Множественные вложенные скобки" },
            { input: "()[]{}}", expected: false, message: "Множественные пары с лишней скобкой" },
            { input: "((()))", expected: true, message: "Множественные вложенные скобки одного типа" }
        ]
    },
    {
        description: "Некорректные комбинации",
        cases: [
            { input: "(]", expected: false, message: "Несоответствующие типы скобок" },
            { input: "([)]", expected: false, message: "Неправильный порядок закрытия" },
            { input: "((", expected: false, message: "Незакрытые скобки" },
            { input: "))", expected: false, message: "Только закрывающие скобки" }
        ]
    },
    {
        description: "Граничные случаи",
        cases: [
            { input: "", expected: true, message: "Пустая строка" },
            { input: "   ", expected: true, message: "Строка из пробелов" },
            { input: "({}[])", expected: true, message: "Правильная сложная комбинация" },
            { input: "({]})", expected: false, message: "Неправильная сложная комбинация" }
        ]
    },
    {
        description: "Длинные последовательности",
        cases: [
            { input: "({[]})({[]})", expected: true, message: "Повторяющиеся правильные структуры" },
            { input: "(((({{{[[[]]]}}}))))", expected: true, message: "Глубоко вложенные скобки" },
            { input: "({[]}))", expected: false, message: "Правильная структура с лишней скобкой" },
            { input: "(({[]})", expected: false, message: "Незакрытая вложенная структура" }
        ]
    }
];

// Функция для запуска тестов
function runTests() {
    let totalTests = 0;
    let passedTests = 0;

    console.log("Начинаем тестирование функции validBrackets\n");

    tests.forEach(group => {
        console.log(`\n=== ${group.description} ===`);

        group.cases.forEach(testCase => {
            totalTests++;
            const result = validBrackets(testCase.input);
            const passed = result === testCase.expected;

            if (passed) {
                passedTests++;
                console.log(`✅ ${testCase.message}`);
                console.log(`   Вход: "${testCase.input}"`);
            } else {
                console.log(`❌ ${testCase.message}`);
                console.log(`   Вход: "${testCase.input}"`);
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