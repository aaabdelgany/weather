//api.openweathermap.org/data/2.5/weather?q=London,uk
document.addEventListener('DOMContentLoaded',()=>{
    const apiKey='07e9a30c39a111b7f6ae91966773d8ed';
    const endPoint='https://api.openweathermap.org/data/2.5/weather?q=';
    const city=document.querySelector('#city');
    const state=document.querySelector('#state');
    const country=document.querySelector('#country');
    const submit=document.querySelector('.button');

    //fetch implementation
    // async function getWeather(wcity,state='',country='',units='imperial'){
        
    //     mainURL=`${endPoint}${wcity},${state},${country}&units=${units}&appid=${apiKey}`
    //     const rep=await fetch(mainURL);
    //     const weatherData=await rep.json();
    //     console.log(city.value)
    //     document.querySelector('.card-content').innerText=`The weather in ${city.value} is ${weatherData.main['temp']}`;
    //     }

    //axios implementation
    async function getWeather(wcity,state='',country='',units='imperial'){
        if(wcity===''){
            const danger=document.createElement('div');
            danger.classList.add('notification','is-danger');
            danger.id='danger';
            danger.innerText='Please enter a city!'
            document.querySelector('.hero').appendChild(danger);
        }else{
            mainURL=`${endPoint}${wcity},${state},${country}&units=${units}&appid=${apiKey}`
            rep=await axios.get(mainURL);
            const weatherData=rep.data;
            document.querySelector('.card-content').innerText=`The weather in ${city.value} is ${weatherData.main['temp']}`;
            clearInputs();
        }
        

    }
    submit.addEventListener('click',()=>{
        getWeather(city.value,state.value,country.value);
    })
    function clearInputs(){
        city.value='';
        state.value='';
        country.value='';
        document.querySelector('#danger').remove();
        
    }
})

