 

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

// manipulations des listes et  ces quelques fonctions

var list = Array(2,5,6,4,7,8)
console.log('Liste avant modification :', list);

list.push(10);
console.log('Liste après ajout d\'un élément :', list);


list.unshift(-1); // ajout d'un element au debut de la liste
console.log('Liste après ajout d\'un élément au début :', list);
list.shift(); // suppression du premier element
console.log('Liste après suppression du premier élément :', list);

list.splice(2,2,3,10); // ajout d'un element à une position donnee
console.log('Liste après ajout d\'un élément à une position donnée :', list);

list.splice(2,1); // suppression d'un element a une position donnee
console.log('Liste après suppression d\'un élément à une position donnée :', list);

list.pop(); // suppressions du dernier element
list.pop();
console.log('Liste après suppression d\'un élément :', list);

list.sort((a,b) => a - b); // tri croissant
console.log('Liste après tri croissant :', list);

list.sort((a,b) => b - a); // tri décroissant
console.log('Liste après tri décroissant :', list);

list.reverse(); // inversion de la liste
console.log('Liste après inversion :', list);


//boucle des listes
console.log('Liste avec une boucle for');
for(let i = 0; i < list.length; i++){
    console.log(list[i]);
}

console.log('Liste avec une boucle for of');


for(let i of list){
    console.log(i);
}

console.log('Liste avec une boucle while');
let j = 0;
while(j < list.length){
    console.log(list[j]);
    j++;
}
//boucle avec foreach et map
console.log('Liste avec une boucle avec foreach et map');
list.forEach(function (item){
    console.log(item);

})
console.log('Liste avec une boucle avec foreach fresh');
list.forEach((ab)=>{
    console.log(ab);

})

list.map(function (elt, i) {
    console.log(elt + ' avec index ' + i);
});


// console



if(f){
    c = a + b;
    console.log('c vaut :', c);
}else{
    console.log('c n\'est pas calculé car la variable f est false');
}
let m=0
while(m<=10){
    console.log('hello world');
    m++;

}
for(let i=0;i<10;i++){
    console.log('hello i am full');
}
