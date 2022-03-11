const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  // In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  let index = countries.indexOf('Ethiopia')

  if (index === -1){
      console.log('This country does not exists')
  } else {
      console.log('This country exists')
  }

  // Find the middle country(ies) in the countries array

  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  let middleCountry = countries[4]
  console.log(middleCountry)

  // Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const firstArray = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia']

    const secondArray = ['Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const arrayOfArray = [firstArray, secondArray]

  console.log(arrayOfArray)