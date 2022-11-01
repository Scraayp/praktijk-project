/*
Auteur: Michal, Kolasa
Aanmaakdatum: 30/9/2022

De javascript bestand om de belangrijkste elementen responsive te maken.
*/

var leeftijd = prompt("Hoe oud bent u?");

var leeftijdInt = parseInt(leeftijd);
var prijs = 0;

var parentNeeded = false;
var paid = false;

if(leeftijdInt < 18)
{
    parentNeeded = true;
}

if(leeftijdInt == 6)
{
    prijs = 50;
}

if(leeftijdInt == 7 || leeftijdInt == 8)
{
    prijs = 116;
}

if(leeftijdInt == 9 || 10)
{
    prijs = 116;
}

if(leeftijdInt == 11 || 12)
{
    prijs = 128
}

if(leeftijdInt == 13 || 14)
{
    prijs = 128;
}

if(leeftijdInt == 15 || 16)
{
    prijs = 148
}

if(leeftijdInt == 17 || 18)
{
    prijs = 148;
}

if(leeftijdInt >= 18)
{
    prijs = 198;
}


var ageText = "U bent " + leeftijdInt + " jaar oud.";
var priceText = "De prijs is " + prijs + " euro.";

if (!leeftijdInt)
{
    ageText = "Geen data ontvangen!".toUpperCase();
    priceText = "Geen data ontvangen!".toUpperCase();
}

document.getElementById("age").innerHTML = ageText;
document.getElementById("contributionCalculator").innerHTML = priceText;