// const elemento = document.getElementById('p1');
// elemento.innerHTML = 'Palavra não';



// Exibir item

function show1() {
    const el = document.getElementsByTagName('li');
    const p = document.querySelector('.p1');
    p.innerText = el[0].innerHTML;   // [0] puxa Murilo, 1 Maria, 2 Marcos
}



// Contar lista

function show2() {
    const el2 = document.getElementsByClassName('list1');
    const p2 = document.querySelector('.p2')
    p2.innerHTML = el2.length;

}

// class

function show3(){
    const el3 = document.getElementsByClassName('urgente');
    const p3 = document.querySelector('.p3');
    p3.innerText = 'Você tem ' + el3.length + ' Compromissos urgentes'
}

// querySelectorALL


function show4(){
    const el3 = document.querySelectorAll('h3. urgent');
    const p3 = document.querySelector('.p4');
    p3.innerText = 'Você tem ' + el3.length + ' Compromissos urgentes'
}








// console.log(elemento.innerHTML);