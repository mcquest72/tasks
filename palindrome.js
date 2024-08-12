
// a function to test if a word is a palindrome

function palindrome(word) {
    word = word.toLowerCase();
    return word === word.split('').reverse().join('');
}

test_word = palindrome('sis')
console.log(test_word)
