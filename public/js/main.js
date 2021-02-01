const city_name = document.getElementById('city_name');
const submit_button = document.getElementById('submit_button');
const error_msg = document.querySelector('.error_msg');
const info = document.querySelector('.info');
const country = document.querySelector('.location');
const temp = document.querySelector('.tempre');
const icon = document.querySelector('.icon');


submit_button.addEventListener('click',async(e)=>{
    // alert('hey i am kofil')
    e.preventDefault();
    const city_val = city_name.value;
    if(city_val === ""){
        error_msg.innerHTML = "Plz enter the city name"
        info.classList.add('hide');
        error_msg.classList.remove('hide');
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city_val}&units=metric&appid=3f6e8ee6ee434bdda97827d2a233ac1a`;
            let response = await fetch(url);
            let jsonData = await response.json();
            let arrayData = [jsonData];
            country.innerHTML = `${arrayData[0].name} , ${arrayData[0].sys.country}`
            temp.innerHTML = arrayData[0].main.temp;
            const weather = arrayData[0].weather.main;
            if (weather === "Clear") {
                icon.innerHTML = '<i class="fas fa-sun" style ="color : #eccc68"></i>'
            }
            else if(weather === "Clouds"){
                icon.innerHTML = '<i class="fas fa-cloud" style ="color : #f1f2f6"></i>'
            }
            else if(weather === "Rain"){
                icon.innerHTML = '<i class="fas fa-cloud-rain" style ="color : #a4b0be"></i>'
            }
            else{
                icon.innerHTML = '<i class="fas fa-sun" style ="color : #eccc68"></i>'
            }
            error_msg.classList.add('hide');
            info.classList.remove('hide');
        }
        catch{
            error_msg.innerHTML = "Plz enter the city name properly"
        }
    }
})