const sizeRange = document.querySelector('#font-size-control');
const textChange = document.querySelector('#text');

console.log(sizeRange);
console.log(textChange);

function sizeChange(event) {
   textChange.style.fontSize = event.currentTarget.value+'px';
};

sizeRange.addEventListener('input', sizeChange)