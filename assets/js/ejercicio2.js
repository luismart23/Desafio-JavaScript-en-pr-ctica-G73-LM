const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const caja = document.querySelector('#caja');

btn1.addEventListener('click', () => {
    caja.style.backgroundColor = '#e53e3e';
    console.log('hiciste click rojo')
})

btn2.addEventListener('click', () => {
    caja.style.backgroundColor = '#dd6b20';
    console.log('hiciste click naranjo')
})

btn3.addEventListener('click', () => {
    caja.style.backgroundColor = '#faf089';
    console.log('hiciste click amarillo')
})

btn4.addEventListener('click', () => {
    caja.style.backgroundColor = '#48bb78';
    console.log('hiciste click verde')
})

btn5.addEventListener('click', () => {
    caja.style.backgroundColor = '#81e6d9';
    console.log('hiciste click verde agua')
})

btn6.addEventListener('click', () => {
    caja.style.backgroundColor = '#d53f8c';
    console.log('hiciste click rosado')
})