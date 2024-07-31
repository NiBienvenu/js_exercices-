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
    changecolor()
}

function changecolor(){

    var a = Math.random().toFixed(2)*100;
    var b = Math.random().toFixed(2)*100;
    var c = Math.random().toFixed(2)*100;
    var d = Math.random().toFixed(2)*100;
    //  while (a>255 || b>255 || c>255 ) {
    //     changecolor()
    //  }
    // document.getElementById('hello').style.color = 'rgb('+(a)+','+b+','+c+')';  //
    document.getElementById('hello').style.color = 'rgb('+(a+d)+','+(b+d)+','+(c+d)+')';  //
    changeTextSize()

    console.log(a)  
    
}

function changeTextSize() {
    let a = document.getElementById('nom').value
    document.getElementById('yves').style.fontSize = ''+a+'px';
    // document.getElementById('yves').style.display = 'none'

}
