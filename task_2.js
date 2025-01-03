// Дан массив целых чисел nums и целевое число target. Необходимо найти индексы двух элементов массива, сумма которых равна target.

function findIndicesForSum(arr, target) {
    arrWithIndices = arr.map((num,index) => [num, index]);
    arr = arrWithIndices.sort((a, b) => a[0] - b[0]);
    if (arr[0][0] > target || arr.length == 0) {
       return [];
    }
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        sum = arr[left][0] + arr[right][0];
        if (sum < target) {
           left ++;
        } else if (sum > target) {
            right --;
        } else {
            return [arr[left][1], arr[right][1]];
        }
    }
    return [];
}

let nums1 = [2,7,11,15];
let target1 = 9;

let nums2 = [3,2,4];
let target2 = 6;

console.log(`Task 2:
\nnums: ${nums1} \ntarget: ${target1} \nresult: ${findIndicesForSum(nums1, target1)}
\nnums: ${nums2} \ntarget: ${target2} \nresult: ${findIndicesForSum(nums2, target2)}`);
