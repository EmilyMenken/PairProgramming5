document.getElementById('click').onclick = function()
{
//clears the error message from the last input
    document.getElementById('output').innerHTML = "";

    // Get the password from the text box
    let password = document.getElementById('password').value;

    //is password 8+ chars
    if(password.length < 8)
    {
        document.getElementById('output').innerHTML = "Password must be 8 or more characters long";

        output.classList.add('printError'); // Add error message
        return;
    }

    //has special char
    let specialChars = "!@#$%^&*()-_+=[]{}|;:',.<>?/`~";
    let foundSpecialChar = false; //changes to true when the loop finds a special char

    for (let c of password) {
        if (specialChars.includes(c)) {
            foundSpecialChar = true;
            break; //found a special char, ending loop
    }
    }

    if (!foundSpecialChar) {
        document.getElementById('output').innerHTML = "Password must contain at least one special character";

        output.classList.add('printError'); // Add error message
        return;
    }

    //has spaces
    for(let c of password)
    {
        if(c === " ")
        {
            document.getElementById('output').innerHTML = "Password must NOT contain any spaces";

            output.classList.add('printError'); // Add error message
            return;
        }
    }
    
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let foundLowerCase = false; //changes to true when the loop finds a lowercase char

    for (let c of password) {
        if (lowerCase.includes(c)) {
            foundLowerCase = true;
            break; //found a lowercase char, ending loop
        }
    }

    if (!foundLowerCase) {
        document.getElementById('output').innerHTML = "Password must contain at least one lowercase character";

        output.classList.add('printError'); // Add error message
        return;
    }  
    
    
    
}