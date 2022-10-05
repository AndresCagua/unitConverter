/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

function convertLength(){
    let baseValue = inputEl.value
    let lengthResult = baseValue / meterToFeet;
    let lengthResult_ = baseValue * meterToFeet;
    let metersToFeetValue = `${baseValue} meter = ${lengthResult_.toFixed(3)} feet ` 
    let feetToMetersValue = ` ${baseValue} feet = ${lengthResult.toFixed(3)} meter` 
    return (metersToFeetValue + " | " + feetToMetersValue) 

}

function convertVolume(){
    let baseValue = inputEl.value
    let volumeResult = baseValue / literToGallon;
    let volumeResult_ = baseValue * literToGallon;
    let litersToGallonsValue = `${baseValue} liters = ${volumeResult_.toFixed(3)} gallons ` 
    let gallonsToLitersValue = ` ${baseValue} gallons = ${volumeResult.toFixed(3)} liters` 
    return (litersToGallonsValue + " | " + gallonsToLitersValue)
}

function convertMass(){
    let baseValue = inputEl.value
    let massResult = baseValue / kiloToPound;  
    let massResult_ = baseValue * kiloToPound;
    let kilogramsToPoundsValue = `${baseValue} kilos = ${massResult_.toFixed(3)} pounds ` 
    let poundsToKilogramsValue = ` ${baseValue} pounds = ${massResult.toFixed(3)} kilos` 
    return (kilogramsToPoundsValue + " | " + poundsToKilogramsValue)
}

convertBtn.addEventListener("click", function() {
    
    // display the units on the page
    lengthEl.textContent = convertLength()
    volumeEl.textContent = convertVolume() 
    massEl.textContent = convertMass()
        
})
