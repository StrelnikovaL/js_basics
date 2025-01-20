// Функция для удаления дубликатов
const removeDuplicates = (nums) => {
    if (nums.length === 0) {
        return 0;
    }
    let indexUniq = 0;
    nums.forEach((val) => {
        if (val !==  nums[indexUniq]) {
            indexUniq++;
            nums[indexUniq] = val;
        }
    });
    return ++indexUniq;
};

// Вспомогательная функция для глубокого сравнения массивов
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// Тестовые случаи
const tests = [
    {
        description: "Базовый тест с повторяющимися элементами",
        input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
        expectedCount: 5,
        expectedArray: [0, 1, 2, 3, 4, "_", "_", "_", "_", "_"]
    },
    {
        description: "Пустой массив",
        input: [],
        expectedCount: 0,
        expectedArray: []
    },
    {
        description: "Массив из одного элемента",
        input: [1],
        expectedCount: 1,
        expectedArray: [1]
    },
    {
        description: "Массив без дубликатов",
        input: [1, 2, 3, 4, 5],
        expectedCount: 5,
        expectedArray: [1, 2, 3, 4, 5]
    },
    {
        description: "Массив с одинаковыми элементами",
        input: [1, 1, 1, 1, 1],
        expectedCount: 1,
        expectedArray: [1, "_", "_", "_", "_"]
    },
    {
        description: "Массив с дубликатами в начале",
        input: [1, 1, 1, 2, 3],
        expectedCount: 3,
        expectedArray: [1, 2, 3, "_", "_"]
    },
    {
        description: "Массив с дубликатами в конце",
        input: [1, 2, 3, 3, 3],
        expectedCount: 3,
        expectedArray: [1, 2, 3, "_", "_"]
    }
];

// Функция для запуска тестов
function runTests() {
    let totalTests = 0;
    let passedTests = 0;

    console.log("Начинаем тестирование функции removeDuplicates\n");

    tests.forEach((testCase, index) => {
        totalTests++;
        console.log(`\nТест ${index + 1}: ${testCase.description}`);

        // Создаем копию входного массива
        let inputArray = [...testCase.input];

        // Запускаем функцию
        const resultCount = removeDuplicates(inputArray);

        // Проверяем количество уникальных элементов
        const countCorrect = resultCount === testCase.expectedCount;

        // Проверяем правильность модификации массива
        const arrayCorrect = arraysEqual(inputArray, testCase.expectedArray);

        if (countCorrect && arrayCorrect) {
            passedTests++;
            console.log("✅ Тест пройден");
        } else {
            console.log("❌ Тест не пройден");
            if (!countCorrect) {
                console.log(`   Ожидаемое количество: ${testCase.expectedCount}`);
                console.log(`   Полученное количество: ${resultCount}`);
            }
            if (!arrayCorrect) {
                console.log(`   Ожидаемый массив: [${testCase.expectedArray}]`);
                console.log(`   Полученный массив: [${inputArray}]`);
            }
        }
    });

    console.log("\n=== Итоги тестирования ===");
    console.log(`Всего тестов: ${totalTests}`);
    console.log(`Успешно: ${passedTests}`);
    console.log(`Провалено: ${totalTests - passedTests}`);
    console.log(`Процент успешных: ${((passedTests / totalTests) * 100).toFixed(2)}%`);
}

// Запускаем тесты
runTests();