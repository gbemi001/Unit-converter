/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
if (typeof document !== 'undefined') {
    let inputEl = document.getElementById("input")
    let convertBtn = document.getElementById('convert-btn')
    let lengthResult = document.getElementById('length-result')
    let volumeResult = document.getElementById('volume-result')
    let massResult = document.getElementById('mass-result')

convertBtn.addEventListener (
    'click', function() {
        lengthResult.textContent = `${meter_feet()} | ${feet_meter()}`
        volumeResult.textContent = `${litres_gallons()} | ${gallons_litres()}`
        massResult.textContent = `${kilograms_pounds()} | ${pounds_kilograms()}`
    }
)

function meter_feet() {
    let mTF = inputEl.value * 3.281
    mTF = parseFloat(mTF).toFixed(3)
    let result = `${inputEl.value} meters = ${mTF} feet`
    return result
}

function feet_meter() {
    let fTM = inputEl.value / 3.281
    fTM = parseFloat(fTM).toFixed(3)
    let result = `${inputEl.value} feet = ${fTM} meters`
    return result
}

function litres_gallons() {
    let lTG = inputEl.value * 0.264
    lTG = parseFloat(lTG).toFixed(3)
    let result = `${inputEl.value} liters = ${lTG} gallons`
    return result
}

function gallons_litres() {
    let gTL = inputEl.value / 0.264
    gTL = parseFloat(gTL).toFixed(3)
    let result = `${inputEl.value} gallons = ${gTL} litres`
    return result
}

function kilograms_pounds() {
    let kTP = inputEl.value * 2.204
    kTP = parseFloat(kTP).toFixed(3)
    let result = `${inputEl.value} kilos = ${kTP} pounds`
    return result
}

function pounds_kilograms() {
    let pTK = inputEl.value / 2.204
    pTK = parseFloat(pTK).toFixed(3)
    let result = `${inputEl.value} pounds = ${pTK} kilos`
    return result
}

}




