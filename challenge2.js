/*
First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(words)
console.log(words.length)

["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13

*/

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

console.log(text)

let phrase = text.split(' ,');
 console.log(phrase)


 /* In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'*/

 const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.push('Sugar')
console.log(shoppingCart)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart[2] = 'Green Tea'
console.log(shoppingCart)

let x = myFunction(4, 3);

function myFunction(a, b) {
  return a * b;   
  console.log(myFunction)