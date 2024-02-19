let Distance;
let Time;
let Pace;

function getDistance() {
    //Function to collect and check user distance input
    
    //get data from user input in the distance field
    Distance = document.getElementById('inputDistance').value;
    //check if user made any entry. if NO - throw exception
    if (Distance === '') {
        console.log("No input in the distance field");
        alert("Please enter a valid distance! Distance can't be negative or zero value!");
        throw new Error("No input in the distance field");        
    };
    //if entry was made, convert to float and check for validity. if value is negative or zero - throw an exception.
    Distance = parseFloat(Distance);
        if (Distance <= 0) {
            console.log("Distance is <= 0");
            alert("Please enter a valid distance! Distance can't be negative or zero value!");
            throw new Error("Distance is <= 0");
        };
        console.log(`Distance is ${Distance} KM`, typeof (Distance));
    //Result of the function is correct Distance value for further calculations.
};

function getTime() {
    // Function to calculate total time (in seconds) from the data input by user

    //declare time componets variables, get data from input fields
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
};

function calculatePace() {
    
    getDistance();
    getTime();
    Pace = (Time / Distance) / 60; // pace in min/km
    paceMinutes = Math.floor(Pace);
    paceSeconds = (Pace - Math.floor(Pace)) * 60;
    
    // console.log(`Pace is ${Pace} min/km`);
    // console.log(`Pace is ${paceMinutes}:${paceSeconds} min:sec/km`);
    console.log(`Target pace should be ${paceMinutes}:${paceSeconds.toFixed(0)} per km (${paceMinutes}:${paceSeconds.toFixed(3)})`);
    
    alert(`Click! Target pace should be ${paceMinutes} minutes ${paceSeconds.toFixed(0)} seconds per km (${paceMinutes}:${paceSeconds.toFixed(3)})`);
};


function clickCalculate() {
    calculatePace();
};