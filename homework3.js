//1
function getMaxDigit(number) {
    number = number.toString()
    
    let cur = number[0]
    for (let i = 1; i < number.lenght; i++){
        if (cur < number[i] ) {
           
            continue
        } else {
            cur = number[i]
        }
    }
    return cur
} 
console.log(`Найбільша цифра ${getMaxDigit(543)}`);

//2

function powFunction(a,b) {

    let num = 1;
    for (let i = 0; i < b ; i++) {
        num = num * a;
    }
    return num
}
console.log(`Степінь ${powFunction(5,5)}`);

//3

function toUpperCase(string) {
    string = string.toLowerCase()
    return string.charAt(0).toUpperCase() + string.slice(1)
}
console.log(`Перша літера велика ${toUpperCase("diAna")}`);

//4

function discount(number) {
 return number - (19.5 * number) / 100 ;

} 
console.log(`Податок ${discount(3000)}`);

//5

function getRandomNumber(n,m) {
   
    return Math.floor(Math.random()*(m-n)) + n;
}
console.log (`Рандомна цифра ${getRandomNumber(2,6)}`);

//8

function getRandomPassword(n=6) {
    let randomNumber = Math.floor(Math.random(10000) * Math.pow(10,n) )
    return randomNumber
}
console.log(`Рандомний пароль ${getRandomPassword()}`);