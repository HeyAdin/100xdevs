setInterval(() => {
    const currentDate = new Date();
    let currentHours = currentDate.getHours();
    let currentMin = currentDate.getMinutes();
    let currentSec = currentDate.getSeconds();

    let timeZone = "AM";
    if (currentHours > 11) {
        timeZone = "PM";
    }
    currentHours > 12 ? currentHours -= 12 : currentHours;

    // function will make it 1, 2, 3 ... to 01, 02, 03 ... so on and so forth
    function pad(num) {
        return num.toString().padStart(2, "0");
    }
    // Padding if below 10
    currentHours < 10 ? currentHours = pad(currentHours) : currentHours;
    currentMin < 10 ? currentMin = pad(currentMin) : currentMin;
    currentSec < 10 ? currentSec = pad(currentSec) : currentSec;
    console.log(`${currentHours} : ${currentMin} : ${currentSec} ${timeZone}`);
}, 1000);