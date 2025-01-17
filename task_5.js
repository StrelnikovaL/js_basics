//Дана строка s, содержащая только символы '(', ')', '{', '}', '[' и ']'. Определите, является ли входная строка валидной.

function isValid(str) {
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

let str1 = "(){)})";
let str2 = "[({})]";
let str3 = "}";
console.log(`Task 5:
\nOriginal string: ${str1}\nIs valid: ${isValid(str1)}
\nOriginal string: ${str2}\nIs valid: ${isValid(str2)}
\nOriginal string: ${str3}\nIs valid: ${isValid(str3)}`);