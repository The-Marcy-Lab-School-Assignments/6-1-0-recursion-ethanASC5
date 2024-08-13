// Recursion Problem Set: Coding Exercises
/** FEEDBACK: Great job getting all test cases to pass! */
// Calculate and return the total sum using recursive approach
const sum = (arr) => {
    if (arr.length === 0) {
        return 0;
    }

    return arr[0] + sum(arr.splice(1));
};


// Reverse string using recursive approach
const reverse = (str) => {
    if (str.length === 0) {
        return "";
    }
    return str[str.length - 1] + reverse(str.slice(0, -1));
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let first = 0;
    let second = 1;
    let sum = 0;

    while (n > 1) {
        sum = first + second;
        first = second;
        second = sum;
        n--;
    }

    return sum;
};

// Recursive fibonacci
const fibRec = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;

    return fibRec(n - 1) + fibRec(n - 2);
};

// Return the index of target in arr, or -1 if not found using recursion 
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    if (start > end) return -1;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (target < arr[mid]) { 
        return binarySearch(arr, target, start, mid - 1);
    }

    return binarySearch(arr, target, mid + 1, end);
};


module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
