

fetch ('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}')
.then(res => res.json())
.then(data => console.log(data))





//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}