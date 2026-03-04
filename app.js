const volume = 2**3 // 2 * 2 * 2 два в третьей степени
console.log(volume)

const city = 'Cherven'
const street = 'Gagarin'
console.log(city + ', ' +  street)

const isSuited = 100 - 10 > 90 - 5
console.log('isSuited: ' + isSuited)



const payRateUSD = 80;
const projectHours = 40;
const availableHours = (11 - 2) * 5
console.log('Can I work? ' + (availableHours>projectHours))
console.log('Orders sum: ', + projectHours*payRateUSD)