const apikey="c0bec553cc2afb2528bf9ac0a865daca";
const apiurl="https://api.openweathermap.org/data/2.5/weather?unit=metric&q="


const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")

async function checkweather(city) {
    const response= await fetch(apiurl+ city +`&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }else{
        
    let data =await response.json();
    // console.log(data);
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "&#8451;";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else if( data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rain.png"
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"
    }

    
}

searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);

})
