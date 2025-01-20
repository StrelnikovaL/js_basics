// Исправленная версия функции (добавлен явный return)
function twoSum(nums, target) {
    arrWithIndices = nums.map((num,index) => [num, index]);
    nums = arrWithIndices.sort((a, b) => a[0] - b[0]);
    if (nums.length == 0) {
       return [];
    }
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        sum = nums[left][0] + nums[right][0];
        if (sum < target) {
           left ++;
        } else if (sum > target) {
            right --;
        } else {
            return [nums[left][1], nums[right][1]];
        }
    }
    return [];

}

// Вспомогательная функция для сравнения массивов
function arraysEqual(arr1, arr2) {
    if (!arr1 || !arr2) return arr1 === arr2;
    if (arr1.length !== arr2.length) return false;
    return arr1.every((val, index) => val === arr2[index]);
}

// Тестовые случаи
const tests = [
    {
        description: "Базовые случаи",
        cases: [
            {
                input: {
                    nums: [2, 7, 11, 15],
                    target: 9
                },
                expected: [0, 1],
                message: "Стандартный случай с числами [2, 7, 11, 15] и целью 9"
            },
            {
                input: {
                    nums: [3, 2, 4],
                    target: 6
                },
                expected: [1, 2],
                message: "Числа не в порядке возрастания [3, 2, 4] с целью 6"
            },
            {
                input: {
                    nums: [3, 3],
                    target: 6
                },
                expected: [0, 1],
                message: "Два одинаковых числа [3, 3] с целью 6"
            }
        ]
    },
    {
        description: "Дополнительные случаи",
        cases: [
            {
                input: {
                    nums: [1, 2, 3, 4, 5],
                    target: 9
                },
                expected: [3, 4],
                message: "Последние два числа в массиве"
            },
            {
                input: {
                    nums: [5, 4, 3, 2, 1],
                    target: 9
                },
                expected: [0, 1],
                message: "Первые два числа в массиве"
            },
            {
                input: {
                    nums: [1, 4, 8, 3, 2],
                    target: 7
                },
                expected: [1, 4],
                message: "Числа находятся не рядом"
            }
        ]
    },
    {
        description: "Граничные случаи",
        cases: [
            {
                input: {
                    nums: [1],
                    target: 1
                },
                expected: [],
                message: "Массив из одного элемента"
            },
            {
                input: {
                    nums: [1, 2],
                    target: 4
                },
                expected: [],
                message: "Сумма не существует"
            },
            {
                input: {
                    nums: [0, 0],
                    target: 0
                },
                expected: [0, 1],
                message: "Сумма нулей"
            }
        ]
    },
    {
        description: "Отрицательные числа",
        cases: [
            {
                input: {
                    nums: [-1, -2, -3, -4],
                    target: -5
                },
                expected: [1, 2],
                message: "Отрицательные числа с отрицательной целью"
            },
            {
                input: {
                    nums: [-2, 0, 1, 2],
                    target: 0
                },
                expected: [0, 3],
                message: "Смешанные положительные и отрицательные числа"
            }
        ]
    }
];

// Функция для запуска тестов
function runTests() {
    let totalTests = 0;
    let passedTests = 0;

    console.log("Начинаем тестирование функции sumTwoNum\n");

    tests.forEach(group => {
        console.log(`\n=== ${group.description} ===`);

        group.cases.forEach(testCase => {
            totalTests++;
            const result = twoSum(testCase.input.nums, testCase.input.target);
            const passed = arraysEqual(result, testCase.expected);

            if (passed) {
                passedTests++;
                console.log(`✅ ${testCase.message}`);
            } else {
                console.log(`❌ ${testCase.message}`);
                console.log(`   Входной массив: [${testCase.input.nums}]`);
                console.log(`   Цель: ${testCase.input.target}`);
                console.log(`   Ожидалось: ${JSON.stringify(testCase.expected)}`);
                console.log(`   Получено: ${JSON.stringify(result)}`);
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