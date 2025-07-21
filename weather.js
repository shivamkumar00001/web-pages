let h = document.querySelector("h1");
console.log(h.innerText);

const city = document.querySelector("input");
const search = document.querySelector("button");
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "7255c07b52da1e8dc0b6463849988841";

async function f(city){
  const response = await fetch(apiurl + city +`&appid=${apikey}`);
  var data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°";
  document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
  document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

  document.querySelector(".weat").style.display="block";
  console.log(data)
}

search.addEventListener("click",()=>{
  f(city.value);
});



