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
    timetext.innerHTML = moment.tz('America/Edmonton').format('HH:mm:ss')
}, 1000);