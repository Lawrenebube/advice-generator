const button = document.getElementById('get-advice');
const id = document.getElementById('advice-id');
const advice = document.getElementById('advice-text');

function getAdvice(){
    fetch ('https://api.adviceslip.com/advice',{
        method:'GET'
    })
    .then ((response)=> {
        return response.json();
    })
    .then(adviceData => {
        const ide = adviceData.slip.id;
        const newAdvice = adviceData.slip.advice;
        id.textContent = ide;
        advice.textContent = newAdvice
    })
      
};

button.addEventListener('click',()=> {
    getAdvice()
})