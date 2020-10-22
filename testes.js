// Questões de vagas
// Escreva um método que receba uma string, com letras repetidas e na sequência e imprima a letra que mais se repete na string.

// Ex:

const string = "aaabbbbcccccddiiiikkkk"
let cont = 1
let contFim = 0
let letra = ""
for (let i = 0; i < string.length; i++) {
    //console.log(`i:${string[i]} i+1:${string[i+1]} cont: ${cont} contFim:${contFim}`); //teste

    // SEM REGEX
    // if (string[i+1]===string[i]) {
    //     cont++
    // } else if (contFim <= cont) {
    //     contFim = cont
    //     cont = 1
    //     letra = string[i]
    // } else {
    //     cont = 1
    // }

    //COM REGEX
//     let compara = string.match(new RegExp(string[i], "g"))
//     if (string[i + 1] === string[i]) {
//         continue;
//     } else if (compara.length >= cont) {
//         cont = compara.length
//         letra = compara[0]
//     }
 }
// console.log(letra);
// console.log(`letra ${letra}: ${cont} repetições`);

letraMaisRepetida = (string) => {
    let cont = 1
    let letra = ""
    for (let i = 0; i < string.length; i++) {

        let compara = string.match(new RegExp(string[i], "g"))
        if (string[i + 1] === string[i]) {
            continue;
        } else if (compara.length >= cont) {
            cont = compara.length
            letra = compara[0]
        }
    }
    console.log(letra);
    
}

//letraMaisRepetida("aaabbbbcccccddiiiikkkk")

palindromo = (string) => {
    let nova = ""
    for (let i = string.length-1; i >= 0; i--) {
      nova+= string[i]
    }
    return string === nova
}

console.log(palindromo('arara'));