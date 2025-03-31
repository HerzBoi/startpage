// TODO write comments

function updateTimeAndGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const timeString = `${displayHours}:${minutes} ${ampm}`;
    document.getElementById('time').textContent = timeString;

    // Edit to change the name shown
    const u_name = "Goose";

    // Set the greeting based on the time of day
    let greetingText = `Hello, ${u_name}!`;
    if (hours < 12) {
        greetingText = `Good morning, ${u_name}!`;
    } else if (hours < 18) {
        greetingText = `Good afternoon, ${u_name}!`;
    } else {
        greetingText = `Good evening, ${u_name}!`;
    }
    document.getElementById('greeting').textContent = greetingText;
}

// TODO change color based on temperature; show feels like temp if there is a more than 2 degree differnce

async function fetchWeather() {

    async function getApiKey() {
        const res = await fetch("api-key.txt");
        const key = await res.text();
        return key.trim();
      }

    const apiKey = await getApiKey();
    const location = "Philadelphia";        // TODO make weather change based on location from ip

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const feelsLike = Math.round(data.current.temp_c);
        // const iconUrl = `https:${data.current.condition.icon}`; TODO add minimalistic icons for weather types

        document.getElementById("weather-temp").textContent = `${feelsLike}°C`;

        // document.getElementById("weather-icon").src = iconUrl;
        // document.getElementById("weather-icon").alt = data.current.condition.text;
    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

fetchWeather(); // Call the function on load
setInterval(updateTimeAndGreeting, 1000);
updateTimeAndGreeting();