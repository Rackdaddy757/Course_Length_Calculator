

//Each button needs to record today's date and then add x amount of days to it. Then a new message needs to produced according to the button pressed.
//Get today's date
let currentDate= new Date();
let startDate= currentDate.getDate();
let endDate= '';

//Add x amount of days today's date to find end date
    //Assign day amounts to each course selection
const c1Days=25;
const c2Days=39;
const c3Days=53;
const daySelection= [c1Days, c2Days, c3Days];

let submitButton= document.getElementsByClassName("selection");

//function to use today's date to add days
function dateCalculator (currentDate) {
    console.log(currentDate);
}

submitButton.addEventListener('click', dateCalculator);