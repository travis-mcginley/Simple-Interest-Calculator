// Function to compute the interest using user-defined values
let compute = () => {
    // Gather user-defined values
    let principal   = document.getElementById("principal");
    let rate        = document.getElementById("rate").value;
    let years       = document.getElementById("years").value;
    let year        = new Date().getFullYear() + parseInt(years);
    
    // If the amount field is empty, prompt the user to input a value
    if (principal.value == "") {
        alert("Please input an amount.");
        principal.focus();
        return;
    }

    // Calculate the interest using the given params
    interest = principal.value * years * rate / 100;
    
    // Build result string
    let result_str = "If you deposit $";
    result_str += principal.value;
    result_str += ", at an interest rate of ";
    result_str += rate;
    result_str += "%, you will receive an amout of $";
    result_str += interest;
    result_str += " in the year ";
    result_str += year;
    

}

// Function used to update the value shown next to the rate slider
let updateRate = () => document.getElementById("rate_val").innerText = document.getElementById("rate").value;

        