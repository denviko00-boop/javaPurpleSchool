const isAdmin = true
const canWrite = true
console.log(`System file ${isAdmin && canWrite}`) // и и 
console.log(`Common file ${isAdmin || canWrite}`) // или 
console.log(`Инвертируем админа ${!isAdmin}`) // 


const isEdited = true
const isSuperAdmin = true 
console.log(`File is edited ${isAdmin && canWrite && !isEdited}`)
console.log(`File is edited ${isAdmin && canWrite && (!isEdited || isSuperAdmin)}`) //



const balance = 1200
const bonusBalance = 90
const isBanned = false
const isExist = false
const isSelling = true

const canBuy = (balance>1000 || bonusBalance>100)
&& !isBanned
&& !isExist
&& isSelling
console.log(`I can buy the game: ${canBuy ? 'Yes' : 'No'}`)