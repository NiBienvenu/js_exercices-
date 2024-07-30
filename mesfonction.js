//les fonctions
function addition(a, b){
    return a + b;
}

function soustraction(a, b){
    return a - b;
}

function sqrt(a, b){
    
}

function majeur(a){
    if (a>18) {
        return "Majeur"
    } else {
        return "Mineur"        
    }
}

//Math fonction

function mathFonction() {
    let a = Math.cos(360)
    let b = Math.sin(360)
    console.log(a +" "+b) /// r
}

var t=addition(12,6)
console.log('addition result :',t)
var w=soustraction(12,8)
console.log('soustraction result :',w)
console.log('personne a 20 ans est :',majeur(20))
mathFonction()