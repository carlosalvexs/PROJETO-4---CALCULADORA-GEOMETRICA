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
    } else (menu == 3 )
}
