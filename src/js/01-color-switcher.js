const buttonStart = document.querySelector('button[data-start]')
console.log(buttonStart);

const buttonStop = document.querySelector('button[data-stop]')
console.log(buttonStop);

let timerId = null;
buttonStop.disabled = true;
// const body =document.querySelector('body')
// console.log(body);

buttonStart.addEventListener('click', onButtonStartClick);
buttonStop.addEventListener('click', onButtonStopClick);


// генерация кольору
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


  function onButtonStartClick() {
    buttonStart.disabled = true;
    buttonStop.disabled = false;
    timerId = setInterval(() => {
        document.body.style.backgroundColor = `${getRandomHexColor()}`;
    }, 500)
 }


function onButtonStopClick() {
    clearInterval(timerId);
    buttonStart.disabled = false;
    buttonStop.disabled = true;
}


