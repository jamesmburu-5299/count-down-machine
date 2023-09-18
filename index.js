const dayC=document.getElementById("days")
const hoursC=document.getElementById("hours")
const minutesC=document.getElementById("minutes")
const secondsC=document.getElementById("sec-c")
const newYears= '6 Dec 2023'
function countdown(){
    const newYearsDate=new Date(newYears)
    const currentDate=new Date()
    const secondsEl=(newYearsDate-currentDate)/1000
    const days=Math.floor(secondsEl/3600/24)
    const hours=Math.floor(secondsEl/3600)%24
    const minutes=Math.floor(secondsEl/60)%60
    const seconds =Math.floor(secondsEl)%60
    
    dayC.innerHTML=days;
    hoursC.innerHTML=hours;
    minutesC.innerHTML=minutes;
    secondsC.innerHTML=seconds
    
}

setInterval(countdown,1000)
countdown()