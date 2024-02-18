let Time;

// Function to calculate total time (in seconds) from the data input by user

function getTime() {

    //declare time variables, get data from input fields
    let Hours = document.getElementById('inputHours').value;
    let Minutes = document.getElementById('inputMinutes').value;
    let Seconds = document.getElementById('inputSeconds').value;

    //Check if user made any entry. if NO assign zero value
    Hours = Hours == '' ? 0 : parseFloat(Hours);
    Minutes = Minutes == '' ? 0 : parseFloat(Minutes);
    Seconds = Seconds == '' ? 0 : parseFloat(Seconds);
    console.log(Hours, typeof(Hours));
    console.log(Minutes, typeof(Minutes));
    console.log(Seconds, typeof(Seconds));

    // declare Time variable and count it in seconds
    Time = (Hours * 3600) + (Minutes * 60) + Seconds;
    console.log(`Total time in seconds is: ${Time} ${typeof (Time)}`);
    //return Time;
}

function calculatePace() {
    
    getTime();

    let Distance = parseFloat(document.getElementById('inputDistance').value);
    let Pace = (Time / Distance) / 60; // pace in min/km
    paceMinutes = Math.floor(Pace);
    paceSeconds = (Pace - Math.floor(Pace)) * 60;
        
    console.log(`Distance is ${Distance} KM`, typeof(Distance));
    console.log(`Pace is ${Pace} min/km`);
    console.log(`Pace is ${paceMinutes}:${paceSeconds} min:sec/km`);
    console.log(`Pace is ${paceMinutes}:${paceSeconds.toFixed(0)} per km (${paceMinutes}:${paceSeconds.toFixed(3)})`);
    
    alert(`Click! Target pace should be ${paceMinutes} minutes ${paceSeconds.toFixed(0)} seconds per km (${paceMinutes}:${paceSeconds.toFixed(3)})`);
};

function clickCalculate() {
    calculatePace();
};