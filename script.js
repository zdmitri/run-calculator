function calculatePace() {
    
    // declare variables, get data from input fields
    let Distance = parseFloat(document.getElementById('inputDistance').value);
    let Hours = parseFloat(document.getElementById('inputHours').value);
    let Minutes = parseFloat(document.getElementById('inputMinutes').value);
    let Seconds = parseFloat(document.getElementById('inputSeconds').value);
    // declare Time variable and count it in seconds
    let Time = (Hours * 3600) + (Minutes * 60) + Seconds;
    // declare Pace 
    let Pace = (Time / Distance) / 60; // pace in min/km
    paceMinutes = Math.floor(Pace);
    paceSeconds = (Pace - Math.floor(Pace)) * 60;
        
    console.log(`Distance is ${Distance} KM`, typeof(Distance));
    console.log(`Total time in seconds is: ${Time} ${typeof (Time)}`);
    console.log(`Pace is ${Pace} min/km`);
    console.log(`Pace is ${paceMinutes}:${paceSeconds} min:sec/km`);
    console.log(`Pace is ${paceMinutes}:${paceSeconds.toFixed(0)} per km (${paceMinutes}:${paceSeconds.toFixed(3)})`);
    
    alert(`Click! Target pace should be ${paceMinutes}:${paceSeconds.toFixed(0)} per km (${paceMinutes}:${paceSeconds.toFixed(3)})`);

};

function clickCalculate() {
    calculatePace();
};