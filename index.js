/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertBtn = document.getElementById("conv-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * meterToFeet} feet`
    volumeEl.textContent = `${baseValue} gallons = ${baseValue * literToGallon} liters`
    massEl.textContent = `${baseValue} pounds = ${baseValue * kiloToPound} kilograms` 
})


