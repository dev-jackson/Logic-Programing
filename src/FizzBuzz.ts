/*
* Problem #1
*
* Title: FIZZBUZZ
* Level: Easy
* Description: Develop a program that displays on the console (with a print) the numbers from 1 to 100
* (both included and with a line break between each print), substituting the following:
* - Multiples of 3 for the word "fizz".
* - Multiples of 5 for the word "buzz".
* - Multiples of 3 and 5 at the same time for the word "fizzbuzz".
*
*/

export const fizzBuzz = (): void => {
    for (let i: number = 1; i <= 100; i++) {
        console.log(`Current count: ${i}`);
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else {
            console.log("Buzz");
        }
    }
}

