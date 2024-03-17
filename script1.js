document.getElementById('search-btn').addEventListener('click', function () {
    var city = document.getElementById('city-input').value;
    var apiKey = '2d0c86664d7949acb7cf8fe9809024d3';
    var xhr = new XMLHttpRequest();
    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            displayWeather(response);
        } else if (xhr.readyState == 4) {
            alert('City not found!');
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
});

function displayWeather(data) {
    var weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} K</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}
