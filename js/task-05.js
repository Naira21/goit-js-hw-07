const nameInputRef = document.querySelector("#name-input");
const nameOutputRef = document.querySelector("#name-output");
function userName() {
    nameOutputRef.textContent = nameInputRef.value.trim() ? nameInputRef.value : 'незнакомец';
}

nameInputRef.addEventListener('input', userName);