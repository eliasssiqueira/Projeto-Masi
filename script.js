const inputs = document.querySelectorAll('input');

const handleFocus =({target}) => {

}

const handleFocusOut = ({target}) => {

}

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));

const handleSubmit = (event) =>{
    event.preventDefault();

    const name = document.querySelector('input[name=name]').value
    const email = document.querySelector('input[name=email]').value;

    fetch('https://api.sheetmonkey.io/form/tw8bR3XZCpWMwt4kqzPoMV',{

    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email}),
    });
}

document.querySelector('form').addEventListener('submit',handleSubmit);