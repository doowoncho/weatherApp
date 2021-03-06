var text = document.getElementById("text");
const apikey = "bb741e731acfb284d24a3a632ebaffbb";
var city = ""
var units = "metric"
var image = "https://api.unsplash.com/search/photos?query=$boston landscape&client_id=lRvdtLBVnMmg1dh4K0scC8LSgPE_zpFEEy9ACryBWpY"

async function getCity(){

    document.body.style.backgroundImage = "";
    city = document.getElementById("city").value
    if(city == ""){
        city = "Boston"   
    }
    let response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=${units}`)
    let data = await response.json();

    let desc = data['weather'][0]['description']
    let main = data['weather'][0]['main']
    let temperature = data['main']['temp']
    let country = data['sys']['country']
    let wind = data['wind']['speed']

   
    document.getElementById("loc").textContent = `${city}, ${country}`
    document.getElementById("temp").textContent = `${temperature}°c`
    document.getElementById("dp").textContent = `${desc}`
    document.getElementById("speed").textContent = `windspeed: ${wind} km/h`

    getPhoto();
}
async function getPhoto(){
    response = await  fetch(`https://api.unsplash.com/search/photos?query=${city} landscape&client_id=lRvdtLBVnMmg1dh4K0scC8LSgPE_zpFEEy9ACryBWpY`)
    data = await response.json();

    image = `url("${data["results"][Math.floor(Math.random() * 10)]['urls']['full']}")`  
  
   
}

function showPhoto(){
    document.body.style.backgroundImage = image;
}

