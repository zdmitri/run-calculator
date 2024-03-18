// let Distance;
// let Time;
// let Pace;

// let resultString; // String to indicate result of calculations
// let distanceUnit; // variable to keep selected units of measurement

// let Hours;
// let Minutes;
// let Seconds;



function copyToClipboard() {
    historyResult = document.getElementById('historyResult')
    // if (historyResult.textContent == '') {
    //     console.log('No result to copy');
    //     alert('No result to copy!');
    //     throw new Error;
    // };
    try {
        navigator.clipboard.writeText(historyResult.textContent);
        console.log('Results copied to clipboard');
        alert('Results copied to clipboard');
    } catch {
        console.error('Unable to copy text to clipboard');
        alert('Unable to copy text to clipboard!');
    };
};



function clearOutputResult() {
    // Purpose of this function is to clear outputResult "div" block

    // Block where resultString paragraphs are kept
    historyResult = document.getElementById('historyResult');

    //clear all paragraphs in the block
    historyResult.innerHTML = '';
};



function outputResult() {
    // Purpose of this function is to take resultString from respective calculation and output it as new line in historyResult "div" block

    // Block where resultString paragraphs will be kept
    historyResult = document.getElementById('historyResult');

    // Paragraph (ref HTML) to output calculations history
    resultParagraph = document.createElement('p');
    resultParagraph.textContent = resultString;

    //add new paragraph with resultString
    // historyResult.appendChild(resultParagraph);
    historyResult.insertBefore(resultParagraph, historyResult.firstChild);
};



function getDistanceUnit() {
    //Function to get selected units of measurement from the dropdown list

    distanceUnit = document.getElementById('distanceUnit').value;
};



// function updateDistanceList() {
//     // Function to update distance list options according to selected units of measurement
    
//     getDistanceUnit();

//     if 

// };



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
        console.log(`Distance is ${Distance} ${distanceUnit}`, typeof (Distance));
    //Result of the function is correct Distance value for further calculations.
};



function getTime() {
    // Function to calculate total time (in seconds) from the data input by user

    //declare time componets variables, get data from input fields
    Hours = document.getElementById('inputHours').value;
    Minutes = document.getElementById('inputMinutes').value;
    Seconds = document.getElementById('inputSeconds').value;

    //Check if user made any entry. if NO assign zero value
    
    Hours = Hours === '' ? 0 : parseFloat(Hours);
    Minutes = Minutes === '' ? 0 : parseFloat(Minutes);
    Seconds = Seconds === '' ? 0 : parseFloat(Seconds);

    console.log(`Hours ${Hours}`, typeof(Hours));
    console.log(`Minutes ${Minutes}`, typeof(Minutes));
    console.log(`Seconds ${Seconds}`, typeof(Seconds));

    //Check if all inputs were empty/zero. If true throw an exception. Else continue calculation
    if (Hours == 0 && Minutes == 0 && Seconds == 0) {
        console.log("Time is equal to zero");
        alert("Please enter a valid time! Time can't be zero or negative!");
        throw new Error("Time is equal to zero");
    };

    // declare Time variable and count it in seconds (This will be total time)
    Time = (Hours * 3600) + (Minutes * 60) + Seconds;
    
    // check if Time is equal or less zero. If true throw an exception. Else continue calculation
    if (Time <= 0) {
        console.log("Time is negative or zero");
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



function getPace() {
    // Function to get pace from user input fields (in min and sec per km)

    //declare pace componets variables, get data from input fields
    inputPaceMinutes = document.getElementById('inputPaceMinutes').value;
    inputPaceSeconds = document.getElementById('inputPaceSeconds').value;

    //Check if user made any entry. if NO assign zero value
    inputPaceMinutes = inputPaceMinutes === '' ? 0 : parseFloat(inputPaceMinutes);
    inputPaceSeconds = inputPaceSeconds === '' ? 0 : parseFloat(inputPaceSeconds);

    //Check if all inputs were empty/zero. If true throw an exception. Else continue calculation
    if (inputPaceMinutes == 0 && inputPaceSeconds == 0) {
        console.log("Pace is equal to zero");
        alert("Please enter a valid pace! Pace can't be zero or negative!");
        throw new Error("Pace is equal to zero");
    };
    if (inputPaceMinutes < 0 || inputPaceSeconds < 0) {
        console.log("One of the pace components has negative value");
        alert("Please enter valid pace values! Pace can't be zero or negative!");
        throw new Error("One of the pace components has negative value");
    };

    Pace = inputPaceMinutes * 60 + inputPaceSeconds; // seconds per km or mile

    console.log(`Pace is ${Pace} seconds per ${distanceUnit}`, typeof (Pace));
    // Result of the function is correct Pace value is seconds per km (or mile), which can be used in further calculations
};



function calculatePace() {
    // This function calculates target running Pace based on known inputs Distance and Time. Result will be outputted in respective "Pace" form fields as minutes and seconds. Value will be assigned to the "resultString" variable

    console.log("_".repeat(15)); //draw line in the console to separate calculation visually, for convenience
    
    getDistanceUnit(); // function collects units of measurement from dropdown list
    getDistance(); // function collects distance from input field
    getTime(); // function collects time from input field
    
    Pace = (Time / Distance) / 60; // pace in min/km
    paceMinutes = Math.floor(Pace);
    paceSeconds = (Pace - Math.floor(Pace)) * 60;

    document.getElementById('inputPaceMinutes').value = paceMinutes;

    if (paceSeconds <= 9) {
        resultString = `To run ${Distance} ${distanceUnit} in ${Hours} hours ${Minutes} minutes ${Seconds} seconds, target pace has to be: ${paceMinutes} minutes 0${paceSeconds.toFixed(0)} seconds per ${distanceUnit} (${paceMinutes}:${paceSeconds.toFixed(3)})`; // result string to be outputted in historyResult "div" block in outputResult funcion
        document.getElementById('inputPaceSeconds').value = '0' + paceSeconds.toFixed(0);
    } else {
        resultString = `To run ${Distance} ${distanceUnit} in ${Hours} hours ${Minutes} minutes ${Seconds} seconds, target pace has to be: ${paceMinutes} minutes ${paceSeconds.toFixed(0)} seconds per ${distanceUnit} (${paceMinutes}:${paceSeconds.toFixed(3)})`; // result string to be outputted in historyResult "div" block in outputResult funcion
        document.getElementById('inputPaceSeconds').value = paceSeconds.toFixed(0);
    };
    
    console.log(`Target pace will be ${paceMinutes}:${paceSeconds.toFixed(0)} per ${distanceUnit} (${paceMinutes}:${paceSeconds.toFixed(3)})`);

    outputResult();

    // alert(`Click! Target pace should be ${paceMinutes} minutes ${paceSeconds.toFixed(0)} seconds per km (${paceMinutes}:${paceSeconds.toFixed(3)})`);
};



function calculateDistance () {
    // This function calculates Distance in selected units of measurement (currently only "KM" supported) based on known inputs Time and Pace. Result will be outputted in the "Distance" form field
    console.log("_".repeat(15)); //draw line in the console to separate calculation visually, for convenience

    getDistanceUnit(); // function collects units of measurement from dropdown list
    getTime(); // function collects time from input field
    getPace(); // function collects pace from input field

    // if (document.getElementById('distanceUnit').value === 'Km') {
    //     Distance = Time / Pace;
    // };
    Distance = Time / Pace;
    console.log(`Distance will be ${Distance.toFixed(3)} ${document.getElementById('distanceUnit').value}`, typeof(Distance));

    document.getElementById('inputDistance').value = Distance.toFixed(3);

    resultString = `Running for ${Hours} hours ${Minutes} minutes ${Seconds} seconds with pace ${inputPaceMinutes}:${inputPaceSeconds} per ${distanceUnit} will make distance: ${Distance.toFixed(3)} ${distanceUnit}`; // result string to be outputted in historyResult "div" block in outputResult function

    outputResult();

};



function calculateTime () {
    // This function calculates total time in seconds based on known inputs Distance and Pace. The result is converted to hours minutes and seconds and will be outputted in respective "time" form fields
    console.log("_".repeat(15)); //draw line in the console to separate calculation visually, for convenience 

    getDistanceUnit(); // function collects units of measurement from dropdown list
    getDistance(); //function collects distance from input field
    getPace(); //function collects pace from input field

    Time = Distance * Pace;
    console.log(`Time will be ${Time.toFixed(3)} seconds`, typeof(Time));

    Hours = Math.floor(Time / 3600);
    Minutes = Math.floor((Time % 3600) / 60);
    Seconds = Math.floor((Time % 3600) % 60);

    document.getElementById('inputHours').value = Hours;
    document.getElementById('inputMinutes').value = Minutes;
    document.getElementById('inputSeconds').value = Seconds;

    resultString = `Running ${Distance} ${distanceUnit} with pace ${inputPaceMinutes}:${inputPaceSeconds} per ${distanceUnit} will make time: ${Hours} hours ${Minutes} minutes ${Seconds} seconds`;

    outputResult();

};