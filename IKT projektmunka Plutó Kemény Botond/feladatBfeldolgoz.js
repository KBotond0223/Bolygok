function szamol1()
{
    var szam1, szam2;
    szam1=Number(document.getElementById("suly").value);
    szam2=Math.round((szam1/100)*37,6)
    alert(szam2+" kg");
}

function szamol2()
{
    if(document.querySelector("#a").checked)
    {
        document.getElementById("ide").innerHTML="Jó válasz!";
    }
    else
    {
        if(document.querySelector("#b").checked || document.querySelector("#c").checked || document.querySelector("#d").checked)
        {
            document.getElementById("ide").innerHTML="Rossz válasz!";
        }
        else
        {
            document.getElementById("ide").innerHTML="Hiányos válasz!";
        }
    }
}