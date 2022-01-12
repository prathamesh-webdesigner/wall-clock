console.log('Wall clock js file');

function updateClock() {
    let currentTime = new Date();
    let currentHourse = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSecounds = currentTime.getSeconds();
    let timeOfDay = (currentTime < 12) ? "AM" : "PM";

    // Adding 0 in front of the minutes and secounds 
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSecounds = (currentSecounds < 10 ? "0" : "") + currentSecounds;

    // Making watch for 12 hrs not 24 hrs 
    currentHourse = (currentHourse > 12 ? currentHourse - 12 : currentHourse);
    currentHourse = (currentHourse == 0 ? 12 : currentHourse);

    let currentTimeStr = currentHourse + ":" + currentMinutes + ":" + currentSecounds +" "+ timeOfDay;

    document.getElementById('clock').innerHTML = currentTimeStr;

}