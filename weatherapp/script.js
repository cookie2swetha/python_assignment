function fetchWeather(){
    let placeName=inputBox.value;
    console.log(placeName);
    let appid="8f9164d0bb1a347b51a7d0e25e247b6c"

    let url=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${placeName}&appid=${appid}`

    fetch(url).then(res=>res.json()).then(data=>displayWeather(data))
}

function displayWeather(data){

    let temp=data.main.temp
    let minTemp=data.main.temp_min
    let maxTemp=data.main.temp_max
    let windSpeed=data.wind.speed
    let cloud=data.weather[0].description
    let place=data.name
    console.log(temp,minTemp,maxTemp,windSpeed);

    let htmlData=`

    <div class="card" style="width: 30rem;">
    <div class="card-header">
       Place Name:${place}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Temp : ${temp} MinTemp:${minTemp} MaxTemp ${maxTemp}</li>
      <li class="list-group-item">WindSpeed ${windSpeed}</li>
      <li class="list-group-item">Cloud Type ${cloud}</li>
      <li class="list-group-item">Cloud Type ${place}</li>

    </ul>
  </div>
    
    `


document.querySelector("#result").innerHTML=htmlData
}