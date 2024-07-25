console.log('Running')

//declaration des variables
let a = -5;
let b = 10;
let c = 0;
var d = "abcdef"
const f =  4

//affichage des variables
console.log('a vaut :', a);
console.log('b vaut :', b);
console.log('d vaut :', d);

//convert variables
/* a = a.toString();  //commentaire du blog
    b = b.toString();*/

// conditions des variables
if(a < b){
    console.log('a est plus petit que b');
}else if(a > b){
    console.log('a est plus grand que b');
}else{
    console.log('a est égal à b');
}

// condition swich
console.log('Conditions switch avec une constante');
switch(f){
    case -8:
        console.log('-8 est une valeur constante');
        break;
    case 0:
        console.log('0 est une valeur constante');
        break;
    case 10:
        console.log('10 est une valeur constante');
        break;
    
    default:
        console.log('la valeur de f n\'est pas -8');
}



if(f){
    c = a + b;
    console.log('c vaut :', c);
}else{
    console.log('c n\'est pas calculé car la variable f est false');
}