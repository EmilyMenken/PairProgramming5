document.getElementById('click').onclick = function()
{
    // Get the password from the text box
    let password = document.getElementById('password').value;

    //is password 8+ chars
    if(password < 8)
    {
        document.getElementById('output').innerHTML = "Passowrd must be 8 or more characters long";
    }

    //has special char
    for(let c in password)
    {
        
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
    let hasUpper = 0;
    let hasLower = 0;
    for(let c in password)
    {
        if(c.isUpper())
        {
            hasUpper++;
        }
        if(c.isLower())
        {
            hasLower++;
        }

    }
    if(hasUpper === 0)
    {
        document.getElementById('output').innerHTML = "Password must contain atleast one uppercase letter";
    }
    if(hasLower === 0)
    {
        document.getElementById('output').innerHTML = "Password must contain atleast one lowercase letter";
    }

    //has number
    for(let c in password)
    {
        if(!c.isNaN())
        {
            document.getElementById('output').innerHTML = "Password must containt atleast one number";
        }
    }
     
}