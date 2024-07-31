// alert('HELLO WORD')

var a = document.getElementById('hello').innerHTML; // 
console.log(a)
var b = document.getElementById('yves').innerHTML='Bonsoir Yves';
console.log(b)

function onclickButton(){
    let a =  document.getElementById('nom').value 
    document.getElementById('hello').innerHTML = a; // 
    document.getElementById('nom').value='amahoro';
}
function changement(){

    let a = document.getElementById('nom').value
    console.log(a)
    document.getElementById('hello').innerHTML=a;
}