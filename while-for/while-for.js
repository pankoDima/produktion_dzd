let number = 1 

while (number <= 10) {
    console.log(number)
    number++
}

let roket = 10

while (roket >= 1) {
    console.log(roket);
    if(roket == 1) {
        console.log("🚀 Ракета стартувала!")
    }
    roket--;
    
}

let number2 = 2

while (number2 <= 20) {
    console.log(number2);
    number2 = number2 + 2
}
// let password = prompt("Введіть пароль:");

// while(password !=  "javascript") {
//     password = prompt("Введіть пароль:")

// }
// alert ("Доступ дозволено!")


for(let i =0; i < 5; i++) {
    console.log("Привіт,програмісте!")
}

let kyrylo = Number(prompt("Введіть число від 1 до 10"))

for (let i = 1; i <= 10; i++) {
    console.log(`${kyrylo} * ${i} = ${kyrylo * i}`)
}