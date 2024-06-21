// let key = "66b08acae433c73ec61a8e87de60b3dd"
// let api ="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}" 

let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData = async()=>{
        let key = "66b08acae433c73ec61a8e87de60b3dd"
        let place = document.getElementById("location").value 
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
        let finalOutput = await data.json();
        console.log(finalOutput)
        let tempValue = document.querySelector(".temp_value")
        let humidValue = document.querySelector(".humid_value")
        let weatherValue= document.querySelector("#weather_condition")
        let weatherImage=document.querySelector("#weather_image")
        let background=document.querySelector("#main_container")
        // console.log(background)

        let finalTemp = Math.round(finalOutput.main.temp-273)
        let finalHumid = finalOutput.main.humidity
        let finalweather = finalOutput.weather[0].main.toLowerCase()

        tempValue.innerHTML=`${finalTemp} <sup>0</sup>C`
        humidValue.innerHTML= `${finalHumid}kmph`
        weatherValue.innerHTML=`${finalweather}`

        switch(finalweather){
            case "clouds":
                weatherImage.src='./assets/Cloud.webp'
                background.style.backgroundImage="url(https://i.pinimg.com/originals/32/19/b5/3219b5bacd3c712241660b5465785e8c.jpg)"
                // background.style.background-size-"cover"
                break;

            case "snow":
                weatherImage.src="./assets/Snow.png"
                background.style.backgroundImage="url(./assets/Snow.png)"
                break;

            case "haze":
                weatherImage.src="./assets/Haze.png"
                background.style.backgroundImage="url(./assets/Haze.png)"
                break;

            case "clear":
                weatherImage.src="./assets/clear.png"
                background.style.backgroundImage="url(./assets/clear.png)"
                break;
                
            case "rainy":
                weatherImage.src="./assets/Rainy.png"
                background.style.backgroundImage="url(./assets/Rainy.png)"
                break;
                
            default :
                weatherImage.src="./assets/default.webp"
                background.style.backgroundImage="url(./assets/default.webp)"
                break;
                
        }

    }
    fetchData()
})

