let weather = {
    apiKey:"d05746c20d789c6950ef91c907a65f95",
    fetchWeather: async function (city) {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
        );
        const data = await response.json();
        this.displayWeather(data);
    },
    displayWeather:async function (data){
        const { name } =  await data;
        const { icon, description } = await data.weather[0];
        const { temp, humidity } = await data.main;
        const { speed } = await data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "Km/h";
        document.querySelector('.weather').classList.remove('loading');

    },
    search: function(){
        const input = document.querySelector(".search-bar");
        this.fetchWeather(input.value);
        input.value = '';
    }

};

document.querySelector(".search button").addEventListener('click', function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener('keyup', function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Gurugram");

