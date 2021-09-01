const startOfMonth = new Date(2021, 7, 1);
const endOfMonth = new Date(2021, 8, 0);

console.log(`${startOfMonth.getFullYear()}-${startOfMonth.getMonth()+1}-${startOfMonth.getDate()} : ${startOfMonth.getDay()}`);
console.log(`${endOfMonth.getFullYear()}-${endOfMonth.getMonth()+1}-${endOfMonth.getDate()} : ${endOfMonth.getDay()}`);