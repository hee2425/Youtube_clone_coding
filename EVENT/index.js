const $div = document.querySelector('.container');
const $form = document.querySelector('form');
const $input = document.querySelector('input');
const $button = document.querySelector('button');

//1. 이벤트 헨들러
//$div.이벤트 이름 = 콜백함수

// $div.onclick = () =>console.log('clicked');
// $div.onclick = () =>alert('clicked');

// function handleClick () {
//     console.log('clicked');
// }


//2. addEventListener
// $div.addEventListener('click', handleClick);
// $div.addEventListener('click', ()=> alert('clicked'));


//3. removeEventListener
// $div.removeEventListener('click', handleClick);


//4. event
// $div.addEventListener('click', handleClick);

// function handleClick (event){
//     console.log(event.target.innerText);
// }

// $input.addEventListener('change', handleChange);
// function handleChange(event){
//     console.log(event.target.value);
// }

$form.addEventListener('submit', handleSubmit);
function handleSubmit(event){
    event.preventDefault();
    const inputValue = $input.value;
    $input.value='';
    console.log(inputValue);
}

