
// A function to test if a number is fizzbuzz, buzz or fizz

function fizzBuzz(n) {
    let fizz = 5;
    let buzz = 3;

    if (n % fizz == 0 && n % buzz == 0) {
        return 'FizzBuzz';
    }else if (n % fizz == 0) {
        return 'Fizz';
    }else if (n % buzz == 0) {
        return 'Buzz';
    }else {
        return 'Not a fizzbuzz, try another number.'
    }
}

game = fizzBuzz(13)
console.log(game)
