function showDiscord() {
    discord.innerHTML = "@xdn"
}

function endShowDiscord() {
    discord.innerHTML = "Discord"
}


function update() {
    var date = new Date();
    datetext.innerHTML = Intl.DateTimeFormat('en-CA').format(date);
    fetch('https://api.open-meteo.com/v1/forecast?latitude=50.88&longitude=-113.95&current=temperature_2m,wind_speed_10m').then(res => res.json()).then(data => {
        weathertext.innerHTML = data.current.temperature_2m + data.current_units.temperature_2m + ', ' + data.current.wind_speed_10m + ' ' + data.current_units.wind_speed_10m
    });
}
setTimeout(() => {
    update();
}, 1000);

var x = setInterval(() => {
    const today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    // if value is under 10 then add a 0 behind it as a string
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    timetext.innerHTML = hours + ':' + minutes + ':' + seconds;
}, 1000);