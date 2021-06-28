const submitBtn=document.getElementById("submitBtn")
const city_name=document.getElementById("city_name")
const temperature=document.querySelector(".temperature")
const image=document.querySelector(".image")
const middle_layer=document.querySelector(".middle_layer")

const apiKey='d636883db482156273339c910ced1564'

window.addEventListener("load",()=>{
    const d=document.getElementById("day");
    const today_date=document.getElementById("today_date");

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let currentDate=new Date();

    let day=days[currentDate.getDay()]
    let month=months[currentDate.getMonth()]
    let date = currentDate.getDate()
    d.textContent=day
    today_date.textContent=date+' '+month

})


submitBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    const city=document.getElementById("cityName").value
    
    if(city===""){
        city_name.textContent="Please write the name before search"
        middle_layer.classList.add("data_hide")
    }else{
        getData(city);
    }
})


async function getData(city){
    // console.log(city)
    try{
        if(location.protocol==="http:"){

            var url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        }else{
            
            var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        }
        const response= await fetch(url);
        const resJson=await response.json()
        const arrData=[resJson]
        let temp=arrData[0].main.temp
        middle_layer.classList.remove("data_hide")
        temperature.textContent=temp
        city_name.textContent=arrData[0].name+"("+arrData[0].sys.country+")"
        console.log(arrData[0].weather[0].icon)
        image.src=`http://openweathermap.org/img/wn/${arrData[0].weather[0].icon}@2x.png`
        }catch{
            city_name.textContent="Plz enter the city name properly"
            middle_layer.classList.add("data_hide")
        }
}