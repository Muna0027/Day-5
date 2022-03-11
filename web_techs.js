const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  // In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let index = webTechs.indexOf('Sass')
  if (index === -1){
      console.log('Sass does not exist')
  } else if (
      console.log('Sass exists'))
    else  {
      console.log()
  }

  // Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

/*
The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let maximum = -Infinity
let minimum = Infinity 

for(let number of numbers){
    if(number > maximum)
    maximum = number
    if(number < minimum)
    minimum = number
}

console.log(maximum)
console.log(minimum)

ages.sort()
console.log(ages)