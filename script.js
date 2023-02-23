

// var CityName = "Odessa"
// let cityName = "Kyev"
// const CITY_NAME = "Dnepro"


// let number1 = 5
// let string = "456456456"
// let bool = true
// let array = [1, 2, 3, 4, 5, 55]
// let cars = {
//     color: 'red',
//     type: 'sedan',
//     Price: '50000'
// }

// console.log(cars.color);

function alphabetPosition(text) {
    let result = ''
    
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    text = text.toLowerCase()

    let separator = ' '

    for (let i=0; i < text.length; i++) {

        let res = alphabet.indexOf(text[i])
        if (res !== -1) {
            result = result + separator + (res + 1)
            separator = ' '
        }
    }

    

    return result
}
console.log(alphabetPosition("The sunset sets at twelve o' clock"));

