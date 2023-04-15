function szamol()
{
    var energia = document.getElementById("energia").value;
    var viz = document.getElementById("viz").value;
    var elelmiszer = document.getElementById("elelmiszer").value;
    var utazas = document.getElementById("utazas").value;
    var papir = document.getElementById("papir").value;
   
    var osszeg = (energia*0.24 + viz*0.003 + elelmiszer*0.3 + utazas*0.17 + papir*0.06).toFixed(2);
   
    document.getElementById("eredmeny").innerHTML = "Az ökolábnyomod: " + osszeg + "<br>tonna CO2-egyenértékű";
}

