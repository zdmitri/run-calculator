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
        console.log(`Distance is ${Distance} ${document.getElementById('distanceUnit').value}`, typeof (Distance));
    //Result of the function is correct Distance value for further calculations.
};



function getTime() {
    // Function to calculate total time (in seconds) from the data input by user

    //declare time componets variables, get data from input fields
    let Hours = document.getElementById('inputHours').value;
    let Minutes = document.getElementById('inputMinutes').value;
    let Seconds = document.getElementById('inputSeconds').value;

    //Check if user made any entry. if NO assign zero value
    
    Hours = Hours === '' ? 0 : parseFloat(Hours);
    Minutes = Minutes === '' ? 0 : parseFloat(Minutes);
    Seconds = Seconds === '' ? 0 : parseFloat(Seconds);

    console.log(Hours, typeof(Hours));
    console.log(Minutes, typeof(Minutes));
    console.log(Seconds, typeof(Seconds));

    //Check if all inputs were empty/zero. If true throw an exception. Else continue calculation
    if (Hours == 0 && Minutes == 0 && Seconds == 0) {
        console.log("Time doesn't have correct value");
        alert("Please enter a valid time! Time can't be zero or negative!");
        throw new Error("Time is equal to zero");
    };

    // declare Time variable and count it in seconds (This will be total time)
    Time = (Hours * 3600) + (Minutes * 60) + Seconds;
    
    // check if Time is equal or less zero. If true throw and exception. Else continue calculation
    if (Time <= 0) {
        console.log("Time has negative or zero value");
        alert("Please enter a valid time! Time can't be zero or negative!");
        throw new Error("Time is negative or zero");
    };

    if (Hours < 0 || Minutes < 0 || Seconds < 0) {
        console.log("One of the time components has negative value");
        alert(`Be careful with time input. Some time components were negative! However further calculation was possible with assumption that total time is ${Time} seconds`);
    };
    console.log(`Total time in seconds is: ${Time} ${typeof (Time)}`);
    //Result of the function is correct Time value for further calculations.
};



function getPace () {
    // Function to get pace from user input fields (in min and sec per km)

    //declare pace componets variables, get data from input fields
    let inputPaceMinutes = document.getElementById('inputPaceMinutes').value;
    let inputPaceSeconds = document.getElementById('inputPaceSeconds').value;

    //Check if user made any entry. if NO assign zero value
    inputPaceMinutes = inputPaceMinutes === '' ? 0 : parseFloat(inputPaceMinutes);
    inputPaceSeconds = inputPaceSeconds === '' ? 0 : parseFloat(inputPaceSeconds);

    //Check if all inputs were empty/zero. If true throw an exception. Else continue calculation
    if (inputPaceMinutes == 0 && inputPaceSeconds == 0) {
        console.log("Pace doesn't have correct value");
        alert("Please enter a valid pace! Pace can't be zero or negative!");
        throw new Error("Pace is equal to zero");
    };
    if (inputPaceMinutes < 0 || inputPaceSeconds < 0) {
        console.log("One of the pace components has negative value");
        alert("Please enter valid pace values! Pace can't be zero or negative!");
        throw new Error("Pace has negative component");
    };

    Pace = inputPaceMinutes * 60 + inputPaceSeconds; // seconds per km/mile

    console.log(`Pace in seconds per ${document.getElementById('distanceUnit').value} ${Pace}`, typeof (Pace));
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

    document.getElementById('inputPaceMinutes').value = paceMinutes;
    document.getElementById('inputPaceSeconds').value = paceSeconds.toFixed(0);

};



function calculateDistance () {

    getTime();
    getPace();

    // if (document.getElementById('distanceUnit').value === 'Km') {
    //     Distance = Time / Pace;
    // };
    Distance = Time / Pace;
    console.log(`Distance will be ${Distance.toFixed(3)} ${document.getElementById('distanceUnit').value}`);

    document.getElementById('inputDistance').value = Distance.toFixed(3);

};



// function clickCalculate() {
//     calculatePace();
// };