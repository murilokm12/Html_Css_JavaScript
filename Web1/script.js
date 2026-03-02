// Botão 1  e  ****...

function show() {
    document.getElementById('p1').innerHTML = 'Bom garoto(a)😌';
}

// Palavra

const elemento = document.getElementById('p2');
elemento.innerHTML = 'Palavra não (Antes era só Palavra)';



// Frase puxada com id e com class
// Elemento específico

function show2() {
    const frase_puxada_id = document.querySelector('#frase');
    frase_puxada_id.innerHTML = 'Frase alterada com id';

}

function show3() {
    const frase_puxada_class = document.querySelector('#frase2');
    frase_puxada_class.innerHTML = 'Frase alterada com class';

}


function show4() {
    const el = document.querySelector('p.tex1');   // ou p.tex1.tex2
    el.innerHTML = ' frase alterada';
}

// ou

// function show4() {
//     const el = document.querySelector('.tex1.tex2');
//     el.innerHTML = ' frase alterada';
// }

























// document . obter_elementos_PorId ('p1');
// const userName = 'Murilo';
// const tuites = 50;

// console.log(userName);