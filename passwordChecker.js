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
    for(let c in password)
    {
        if(c === " ")
        {
            document.getElementById('output').innerHTML = "Password must NOT contain any spaces";
        }
    }

    //has uppercase, has lower
    // let hasUpper = 0;
    // let hasLower = 0;
    // for(let c in password)
    // {
    //     if(c.isUpper())
    //     {
    //         hasUpper++;
    //     }
    //     if(c.isLower())
    //     {
    //         hasLower++;
    //     }

    // }
    // if(hasUpper === 0)
    // {
    //     document.getElementById('output').innerHTML = "Password must contain atleast one uppercase letter";
    // }
    // if(hasLower === 0)
    // {
    //     document.getElementById('output').innerHTML = "Password must contain atleast one lowercase letter";
    // }

    //has number
    // for(let c in password)
    // {
    //     if(isNaN(c))
    //     {
    //         document.getElementById('output').innerHTML = "Password must containt atleast one number";
    //     }
    // }
     
}