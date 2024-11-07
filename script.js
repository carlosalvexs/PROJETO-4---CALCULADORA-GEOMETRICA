function trian( b,h ) {
    return (b * h)/2
}

function retan(b,h) {
    return (b * h)
}

function quadra(l,l) {
    return (l * l)
}

function trape(basema,baseme,h) {
    return (basema + baseme)* h /2          
}
function circ(raio)  {
    return 3,14 * (raio*raio)
}
    


let menu = []
let continuar = true

while(continuar) {
    let menu = prompt(` \n 1 - area do triangulo \n 2 - área do retângulo \n 3 - área do quadrado \n 4 - área do trapézio \n 5 - área do círculo \n 6 - sair `)
    if (menu == '1') {
        let baseT = prompt('qual a base do triangulo?') 
        let alturaT = prompt ('qual a altura?')
         alert('A área do triangulo é ' + trian(baseT,alturaT))
    } else if (menu == '2') {
        let baseR = prompt ('qual a base do retângulo?')
        let alturaR = prompt('qual a altura do retangulo?')
         alert('a area do retangulo é' + retan(baseR,alturaR))
    } else if(menu == '3' ) {
        let lado = prompt('qual o lado do triangulo')
        alert('a area do quadrado é ' + quadra(lado,lado))
    } else if (menu == '4') {
        let baseMaior = prompt('qual a base menor?')
        let baseMenor = prompt ('qual o lsdo da base menor?')
        let altura = prompt ('qual a altura?')
        alert('a area do trapezio é' + trape(baseMaior,baseMenor,altura))
    }else if (menu == '5') {
        let raio = prommpt ('qual o raio do circulo?')
        alert('a area o circulo é?' + circ(raio))
    } else if (menu == '6') {
        alert('saindo...')
        continuar=false
    } else [
        alert('opcao invalida!')
    ]
}
