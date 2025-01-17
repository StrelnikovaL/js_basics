//Задача: Удаление дубликатов из отсортированного массива

function removeDuplicates(nums) {
    let indexUniq = 0;
    nums.forEach((val) => {
        if (val !==  nums[indexUniq]) {
            indexUniq++;
            nums[indexUniq] = val;
        }
    });
    return ++indexUniq;
}

let arr = [0,0,1,1,1,2,2,3,3,4];
console.log(`Task 4:
\nOriginal array: ${arr}
\nNumber of unique elements: ${removeDuplicates(arr)}
\nArray after removing duplicates: ${arr}`);