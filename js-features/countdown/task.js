
const timerElement = document.getElementById('timer');


let countdown = parseInt(timerElement.textContent);


const timerId = setInterval(() => {

  countdown--;


  timerElement.textContent = countdown;

 
  if (countdown === 0) {
    clearInterval(timerId); 
    alert('Вы победили в конкурсе!'); 
  }
}, 1000);
