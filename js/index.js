
const seta = document.querySelector('.abrirresposta1');

const seta2 = document.querySelector('.abrirresposta2');

const seta3 = document.querySelector('.abrirresposta3');

const reposta1 = document.querySelector('.resposta1');

const reposta2 = document.querySelector('.resposta2');

const reposta3 = document.querySelector('.resposta3');

const setacende1 = document.querySelector('.seta1');
const setacende2 = document.querySelector('.seta2');
const setacende3 = document.querySelector('.seta3');

seta.addEventListener('click', () => {

    const jafoi = reposta1.classList.contains('mostrar');
    if (jafoi) {

        reposta1.classList.remove('mostrar');
        reposta1.classList.add('esconder');

        setacende1.classList.remove('aberta1');
        setacende1.classList.add('fechada1');

        return;
    }


    reposta1.classList.remove('esconder');
    reposta1.classList.add('mostrar');

    setacende1.classList.remove('fechada1');
    setacende1.classList.add('aberta1');

    const abri1 = reposta1.classList.contains('mostrar');

    if (abri1) {

        reposta2.classList.remove('mostrar');
        reposta3.classList.remove('mostrar');
        reposta2.classList.add('esconder');
        reposta3.classList.add('esconder');
        setacende2.classList.remove('aberta2');
        setacende2.classList.add('fechada2');
        setacende3.classList.remove('aberta3');
        setacende3.classList.add('fechada3');
        return;
    }

})

seta2.addEventListener('click', () => {


    const jafoi2 = reposta2.classList.contains('mostrar');
    if (jafoi2) {

        reposta2.classList.remove('mostrar');
        reposta2.classList.add('esconder');

        setacende2.classList.remove('aberta2');
        setacende2.classList.add('fechada2');

        return;
    }

    reposta2.classList.remove('esconder');
    reposta2.classList.add('mostrar');

    setacende2.classList.remove('fechada2');
    setacende2.classList.add('aberta2');

    const abri2 = reposta2.classList.contains('mostrar');

    
    if (abri2) {

        reposta1.classList.remove('mostrar');
        reposta3.classList.remove('mostrar');
        reposta1.classList.add('esconder');
        reposta3.classList.add('esconder');
        setacende1.classList.remove('aberta1');
        setacende1.classList.add('fechada1');
        setacende3.classList.remove('aberta3');
        setacende3.classList.add('fechada3');
        return;
    }

})

seta3.addEventListener('click', () => {


    const jafoi3 = reposta3.classList.contains('mostrar');
    if (jafoi3) {

        reposta3.classList.remove('mostrar');
        reposta3.classList.add('esconder');

        setacende3.classList.remove('aberta3');
        setacende3.classList.add('fechada3');

        return;
    }

    reposta3.classList.remove('esconder');
    reposta3.classList.add('mostrar');

    setacende3.classList.remove('fechada3');
    setacende3.classList.add('aberta3');

    const abri3 = reposta3.classList.contains('mostrar');

    if(abri3) {

        reposta2.classList.remove('mostrar');
        reposta1.classList.remove('mostrar');
        reposta2.classList.add('esconder');
        reposta1.classList.add('esconder');
        setacende1.classList.remove('aberta1');
        setacende1.classList.add('fechada1');
        setacende2.classList.remove('aberta2');
        setacende2.classList.add('fechada2');
        

        return;
    }

})

