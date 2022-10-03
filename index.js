/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let lengthEl_ = document.getElementById("length-el_")
let volumeEl = document.getElementById("volume-el")
let volumeEl_ = document.getElementById("volume-el_")
let massEl = document.getElementById("mass-el")
let massEl_ = document.getElementById("mass-el_")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    let lengthResult = baseValue / meterToFeet;
    let lengthResult_ = baseValue * meterToFeet;
    let volumeResult = baseValue / literToGallon;
    let volumeResult_ = baseValue * literToGallon;
    let massResult = baseValue / kiloToPound;  
    let massResult_ = baseValue * kiloToPound;  
      
    lengthEl.textContent = `${baseValue} meter = ${lengthResult_.toFixed(3)} feet | ` 
    lengthEl_.textContent = `${baseValue} feet = ${lengthResult.toFixed(3)} meter` 
    
    volumeEl.textContent = `${baseValue} liters = ${volumeResult_.toFixed(3)} gallons | ` 
    volumeEl_.textContent = `${baseValue} gallons = ${volumeResult.toFixed(3)} liters` 
    
    massEl.textContent = `${baseValue} kilos = ${massResult_.toFixed(3)} pounds | ` 
    massEl_.textContent = `${baseValue} pounds = ${massResult.toFixed(3)} kilos` 
})

