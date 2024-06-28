function clock(){
    let hours = document.querySelector(".hours");
    let minutes = document.querySelector(".minutes");
    let seconds = document.querySelector(".seconds");
    let piriod = document.querySelector(".am_pm");
    let day = document.querySelector(".day");
    let month = document.querySelector(".month");
    let year = document.querySelector(".year");
    
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    
    
    if(h > 12){
        h = h - 12;
    }
    
    let am_pm = h >= 12 ? "PM":"AM";
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    // day month or year 
    let weekes = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let d = new Date();
    let dd = weekes[d.getDay()];
    
    let mo = new Date();
    let mm = months[mo.getMonth()];
    
    let y = new Date().getFullYear();
    
    
    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    day.innerHTML = dd;
    month.innerHTML = mm;
    year.innerHTML = y;
    piriod.innerHTML = am_pm;
};
setInterval(clock,1000)