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

var t=addition(12,6)
console.log('addition result :',t)
var w=soustraction(12,8)
console.log('soustraction result :',w)
console.log('personne a 20 ans est :',majeur(20))