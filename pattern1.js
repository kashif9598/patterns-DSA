// Geek is very fond of patterns. Once, his teacher gave him a square pattern to solve. He gave Geek an integer n and asked him to build a pattern.

// Help Geek to build a star pattern.
// Example 1:
// Input: 5

// Output:
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// Your Task:

// You don't need to input anything. Complete the function printSquare() which takes  an integer n  as the input parameter and print the pattern.

// Constraints:

// 1<= N <= 20
let string = "";
function printSquare(num) {
    for (i = 0; i < num; i++) {
        for (j = 0; j < num; j++) {
            string += "*"
        }
        string += "\n"
    }
    return string;
}

console.log(printSquare(5))