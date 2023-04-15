function ell01()
{
    if(document.querySelector("#c01").checked)
    {
        document.getElementById("megoldas01").innerHTML="1. feladat: Jó válasz";
    }
    else
    {
        if(document.querySelector("#a01").checked ||
           document.querySelector("#b01").checked ||
           document.querySelector("#d01").checked)
        {
            document.getElementById("megoldas01").innerHTML="1. feladat: Rossz válasz";
        }
        else
        {
            document.getElementById("megoldas01").innerHTML="Adjon meg egy választ";
        }
    }
}

function ell02()
{
    if(document.querySelector("#a02").checked)
    {
        document.getElementById("megoldas02").innerHTML="2. feladat: Jó válasz";
    }
    else
    {
        if(document.querySelector("#b02").checked ||
           document.querySelector("#c02").checked ||
           document.querySelector("#d02").checked)
        {
            document.getElementById("megoldas02").innerHTML="2. feladat: Rossz válasz";
        }
        else
        {
            document.getElementById("megoldas02").innerHTML="Adjon meg egy választ";
        }
    }
}

function ell03()
{
    if(document.querySelector("#b03").checked)
    {
        document.getElementById("megoldas03").innerHTML="3. feladat: Jó válasz";
    }
    else
    {
        if(document.querySelector("#a03").checked ||
           document.querySelector("#c03").checked ||
           document.querySelector("#d03").checked)
        {
            document.getElementById("megoldas03").innerHTML="3. feladat: Rossz válasz";
        }
        else
        {
            document.getElementById("megoldas03").innerHTML="Adjon meg egy választ";
        }
    }
}