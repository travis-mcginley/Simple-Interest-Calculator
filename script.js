// Function to compute the interest using user-defined values
let compute = () => {
    // Gather user-defined values
    let principal   = document.getElementById("principal");
    let rate        = document.getElementById("rate").value;
    let years       = document.getElementById("years").value;
    let year        = new Date().getFullYear() + parseInt(years);
    
    // If the amount field is empty, prompt the user to input a value
    let result_str = ""
    if (principal.value == "") {
        result_str = "You forgot to input a value &#128517;";
        principal.focus();

    } else if (principal.value <= 0) {
        result_str = "Try putting a number greater than zero &#129300;";
    
    } else {

        // Calculate the interest using the given params
        interest = principal.value * years * rate / 100;
        
        // Build result string
        result_str += "If you deposit $";
        result_str += principal.value;
        result_str += " today, at an interest rate of ";
        result_str += rate;
        result_str += "%, you will receive an amout of $";
        result_str += interest;
        result_str += " in the year ";
        result_str += year;
        result_str += " &#128526;";
    }
    
    document.getElementById("result").innerHTML = result_str;
}

// Function used to update the value shown next to the rate slider
let updateRate = () => document.getElementById("rate_val").innerText = document.getElementById("rate").value;

        