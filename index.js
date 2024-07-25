console.log('Running')

//declaration des variables
let a = -5;
let b = 10;
let c = 0;
var d = "abcdef"
const f = -8

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

if(f){
    c = a + b;
    console.log('c vaut :', c);
}else{
    console.log('c n\'est pas calculé car la variable f est false');
}