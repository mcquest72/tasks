
// A function to collect even and odd numbers between 0 and 100

function even_odd_num(x, y) {
    let evenNum = [];
    let oddNum = [];

    for (let i = x; i <= y; i++) {
        if (i % 2 === 0) {
            evenNum.push(i);
        }else {
            oddNum.push(i);
        }
    }

    return {even: evenNum, odd: oddNum};
}


let numbers = even_odd_num(0, 100);
console.log('Even Numbers: ', numbers.even);

console.log('Odd Numbers: ', numbers.odd);
