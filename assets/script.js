let counter=0;
const counterval=document.getElementById('counter-number');
const inbut=document.getElementById('increment-button');
const decbut=document.getElementById('decrement-button');
inbut.addEventListener('click', () => {
    counter++;
    counterval.innerHTML = counter;
});
decbut.addEventListener('click', () => {
    counter--;
    counterval.innerHTML = counter;
});
const incrementFunction = () => {
    console.log('increment logged!')
}

const decrementFunction = () => {
    console.log('decrement logged!')
}