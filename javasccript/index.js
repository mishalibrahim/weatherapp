
fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=b41ec3be35c7dac8aabbc21ba253137a&units=metric`).then(data=>data.json()).then(data=>displayData(data))


function search(){
    countryName=data.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=b41ec3be35c7dac8aabbc21ba253137a&units=metric`).then(data=>data.json()).then(data=>displayData(data))
}




function displayData(data){
    country=data.name
    image=data.weather[0].icon
    condition=data.weather[0].main
    wind=Math.round(data.wind.speed)
    humidity=data.main.humidity
    temperature=Math.floor(data.main.temp)
    timezone=data.timezone
    console.log(country,image,condition,wind,humidity,temperature);
    d = new Date()
localTime = d.getTime()
localOffset = d.getTimezoneOffset() * 60000
utc = localTime + localOffset
var usman = utc + (1000 * timezone )
jabbar = new Date(usman)
hours = ('0' + jabbar.getHours()).slice(-2)
mins = ('0' + jabbar.getMinutes()).slice(-2)

time = hours + ':' + mins
    result.innerHTML=`
    <div class="d-flex justify-content-between pt-2"> <p class="country-name">${country}</p> 
    <p id="time">${time}</p>
</div>
<img src="http://openweathermap.org/img/wn/${image}@2x.png" alt="" width="135px">
<p class="text-center description">${condition}</p>
<div class="last-main" >
    <pre>
<i class="fa-solid fa-wind"></i> ${wind}km/hr

<i class="fa-solid fa-droplet"></i> ${humidity}%
    </pre>
<h1>${temperature}&deg;</h1>
</div>
    `
}