function updateTimeAndGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    const timeString = `${displayHours}:${minutes} ${ampm}`;
    document.getElementById('time').textContent = timeString;

    // Set the greeting based on the time of day
    let greetingText = "Hello, Goose!";
    if (hours < 12) {
        greetingText = "Good morning, Goose!";
    } else if (hours < 18) {
        greetingText = "Good afternoon, Goose!";
    } else {
        greetingText = "Good evening, Goose!";
    }
    document.getElementById('greeting').textContent = greetingText;
}

setInterval(updateTimeAndGreeting, 1000);
updateTimeAndGreeting();