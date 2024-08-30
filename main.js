// Задание 1

// function info (name, birthYear, currentYyear) {
//     let one =+prompt('Введите имя')
//     let two =+prompt('Введите год рождения')
//     let three =+prompt('Введите текущий год')
//     let age = currentYyear - birthYear
//     let result = 'Вас зовут ' + name + ', ' + 'вааш возраст ' + age
    
//     return result

// }

// console.log(info('Aziz', 1995, 2024));


// Задание 2

function random (min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min )
}

let example = +prompt('Введите кол-во примеров')
for(let i = 0; i < example; i++) {
    let one = random(1,100)
    let two = random(1,100)
    let symbol = random(1,4)
    let answer = 0  


if(symbol == 1) {   
    answer = one + two
    symbol = '+'
}else if(symbol == 2) {
    answer = one - two 
    symbol = '-'
}else if(symbol == 3) {
    answer = one * two 
    symbol = '*'
}else if(symbol == 4) {
    answer = one / two 
    symbol = '/'}
    
    let result = +prompt(one + symbol + two + ' =')

    console.log(result == answer ? 'Ваш ответ верный' : 'Ваш ответ не верный. Правильный ответ ' + answer);
}


