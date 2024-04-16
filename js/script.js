// Switch Mode

let body = document.body;
let modeBtn = document.querySelector(".btn");

modeBtn.addEventListener("click", ()=>{
    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        modeBtn.innerText = `Dark Mode`;
    } else{
        body.classList.add("dark");
        modeBtn.innerText = `Light Mode`;
    }
});

// Click Effect (Can be done in SwitchMode but I am doing it Separately so we can apply it on all btns)

modeBtn.addEventListener("click", (e)=>{

    let x = e.clientX;
    let y = e.clientY;

    let btnTop = modeBtn.offsetTop;
    let btnLeft = modeBtn.offsetLeft;

    let xInside = x - btnLeft;
    let yInside = y - btnTop;

    let clickEffect = document.createElement("span");
    clickEffect.style.top = yInside + "px";
    clickEffect.style.left = xInside + "px";
    modeBtn.appendChild(clickEffect);

    setTimeout(()=>{
        clickEffect.remove();
    }, 500);
});


// Making Clock Functional

let days = ["Sunday", "Monady", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let hourHand = document.querySelector(".hours");
let minHand = document.querySelector(".minutes");
let secHand = document.querySelector(".seconds");
let timeField = document.querySelector(".time");
let dateField = document.querySelector(".date");

function setTime(){

    let time = new Date();
    let date = time.getDate();
    let month = time.getMonth();
    let day = time.getDay();
    let hour = time.getHours();
    let hourForClock = hour % 12 === 0 ? 12 : hour % 12;
    let minute = time.getMinutes();
    let second = time.getSeconds();

    hourHand.style.transform = `translate(-50%, -100%) rotate(${scale(hour, 0, 11, 0, 360)}deg)`;
    minHand.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    secHand.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;

    timeField.innerText = `${hourForClock < 10 ? `0${hourForClock}`: hourForClock}:${minute < 10 ? `0${minute}` : minute}`;
    dateField.innerHTML = `${days[day]}, ${months[month]}, <span>${date}</span>`;

}




const scale = (num, in_min, in_max, out_min, out_max) =>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
 }


setInterval(setTime,1000);