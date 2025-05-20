let time = document.getElementById("time")
let dateElement = document.getElementById("date")

function clock() {
    const fullDate = new Date();
    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();
    let ampm = hours >= 12 ? "pm" : "am"
    // hours = hours % 12
    // hours = hours ? hours : 12
    time.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm}`

    // date.toDateString() returns: Thu May 08 2025
    let dateStringSubstrings = fullDate.toDateString().split(" ");
    let day = dateStringSubstrings[0]
    let month = dateStringSubstrings[1]
    // let date = dateStringSubstrings[2]
    let year = dateStringSubstrings[3]
    dateElement.textContent = `${day}, ${fullDate.getDate()} ${month}, ${year}`
}

clock();
setInterval(clock, 1000);

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}