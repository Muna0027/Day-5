
 // Declare an empty array;
  const arr = Array()
  console.log(arr)

  const arr = []
  console.log(arr)

// Declare an array with more than 5 number of elements

const numbers = [0,1,2,3,4,5,6,7,8,9]
console.log(numbers)

// Find the length of your array
const numbers = [0,1,2,3,4,5,6,7,8,9]
console.log('length', numbers.length)

// Get the first item, the middle item and the last item of the array

const fruits = ['Banana', 'apple', 'watermelon', 'grapefuit', 'grapes', 'mangos', 'pineapples', 'pears']
 let firstFruit = fruits[0]
 let middleFruit = fruits[3]
 let lastFruit = fruits[7]
 console.log(firstFruit,middleFruit,lastFruit)

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = ['Muna', 1, 2, 'Adan', 6, 0, 90837]
console.log(mixedDataTypes.length)

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//Print the array using console.log()
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itComapanies)

// Print the number of companies in the array
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log('Number of Companies:', itCompanies.length)

// Print the first company, middle and last company

const itComapanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let firstCompany = itComapanies[0]
let middleCompany = itComapanies[2]
let lastCompany = itComapanies[6]
console.log(firstCompany,middleCompany,lastCompany)

// Print out each company

const itComapanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itComapanies)

// Change each company name to uppercase one by one and print them out

const itComapanies = ['Facebook']
itComapanies.map(f=>{ return f.toUpperCase(); });

const itComapanies = ['Google']
itComapanies.map(f=>{return f.toUpperCase(); });

const itComapanies = ['Microsoft']
itComapanies.map(f=>{return f.toUpperCase(); });

const itComapanies = ['Apple']
itComapanies.map(f=>{return f.toUpperCase(); });

const itComapanies = ['IBM']
itComapanies.map(f=>{return f.toUpperCase(); });

const itComapanies = ['Oracle']
itComapanies.map(f=>{return f.toUpperCase(); });

const itComapanies = ['Amazon']
itComapanies.map(f=>{ return f.toUpperCase(); });

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const itComapanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'and Amazon are big IT companies.']
console.log(itComapanies.join(', '))

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']
let index = itCompanies.indexOf('IBM')

if(index === -1) {
    console.log('A company is not found')
}  else {
    console.log('This company exists!')
}

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']
let index = itCompanies.indexOf('MongoDB')

if(index ===-1) {
    console.log('This company does not exist...')
}else {
    console.log('This company exists!')
}

// Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']

itCompanies.sort()
console.log(itCompanies)

// Reverse the array using reverse() method

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']

itCompanies.reverse()
console.log(itCompanies)

// Slice out the first 3 companies from the array

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']
console.log(itCompanies.slice(3,6))

// Slice out the last 3 companies from the array

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']
console.log(itCompanies.slice(0,3))

// Slice out the middle IT company or companies from the array

// Remove the first IT company from the array

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']
itCompanies.shift()
console.log(itCompanies)

// Remove the middle IT company or companies from the array

// Remove the last IT company from the array

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']
itCompanies.pop()
console.log(itCompanies)

// Remove all IT companies
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']
console.log(itCompanies.splice())

