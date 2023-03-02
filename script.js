const inputs = document.querySelectorAll('input');

const handleFocus =({target}) => {

}

const handleFocusOut = ({target}) => {

}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

const button = document.querySelector('button');

const addLoading = () => {
    
    button.innerHTML = '<img src="6356630.png" class="loading" alt="">'
}

const removeLoading = () => {
    button.innerHTML = 'Enviar'
}


const handleSubmit = (event) =>{
    event.preventDefault();
    addLoading();
    const name = document.querySelector('input[name=name]').value;
    const telefone = document.querySelector('input[name=telefone]').value;

    fetch('https://api.sheetmonkey.io/form/tw8bR3XZCpWMwt4kqzPoMV',{

    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, telefone}),
    }).then(() => removeLoading())
}

document.querySelector('form').addEventListener('submit',handleSubmit);