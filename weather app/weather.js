document.addEventListener("DOMContentLoaded", function() {
    const apikey="0121bde2d05d9d8f8dca2f302181f08e";
    const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
    const searchbox=document.querySelector("#search input");
    const searchbtn=document.querySelector("#search button");
    const icon=document.querySelector(".icon");
    const weatherDiv = document.querySelector(".weather");
    const errorDiv = document.querySelector(".error");

    weatherDiv.style.display="none";
    errorDiv.style.display="none";
    
   
    async function checkweather(city){
        const response = await fetch(apiurl + city + `&appid=${apikey}`);


        if(response.status==404){
            weatherDiv.style.display="none";
            errorDiv.style.display="block";
        }

        else{
        var data= await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

        if (data.weather[0].main=="Clear"){
            icon.src="./images/clear.png";
        }
       else if (data.weather[0].main=="Clouds"){
            icon.src="./images/clouds.png";
        }
       else if (data.weather[0].main=="Rain"){
            icon.src="./images/rain.png";
        }
       else  if (data.weather[0].main=="Drizzle"){
            icon.src="./images/drizzle.png";
        }
       else  if (data.weather[0].main=="Mist"){
            icon.src="./images/mist.png";
        }
        
        weatherDiv.style.display="block";
         errorDiv.style.display="none";


    }}
   

    searchbtn.addEventListener("click",()=>{
        checkweather(searchbox.value);
    });
    searchbox.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            checkweather(searchbox.value);
        }
    });

    searchbox.addEventListener("input", () => {
        if (searchbox.value.trim() === "") {
            weatherDiv.style.display = "none";
            errorDiv.style.display = "none";
        }
    });
   
}); 



       
    

    

   

    



