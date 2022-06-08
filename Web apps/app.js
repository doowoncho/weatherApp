var text = document.getElementById("text");
const apikey = "bb741e731acfb284d24a3a632ebaffbb";
var city = ""
var units = "metric"


async function getCity(){
    city = document.getElementById("city").value
    let response = await  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apikey}`)
    let data = await response.json();
    
    console.log(data[0]['name'])
    
    let lon = data[0]['lon']
    let lat = data[0]['lat']
    
    response = await  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=${units}`)
    data = await response.json();

    console.log(data['main']['temp'] + "C")

    text.textContent = `The temperature in ${city} is ` + data['main']['temp'] + "C"

}


