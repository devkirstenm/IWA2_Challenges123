/* setting min and max numbers */
const MAX_NUMBER = 15 /* "MAX_NUMBER" is known as a global constance written in capital + underscores = are settings/configurations set as the top of the page & they never change */
const MIN_NUMBER = -5
const STEP_AMOUNT = 5; /* adds/subtracts number by 5 at a time */

/* Use this selector to find this element in our HTML */
const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

/* says listen for x and when x happens do this */
/* "... do this. NB: this must come first*/
const subtractHandler = () => {
    const newValue = parseInt(number.value) - STEP_AMOUNT /* parse will treat number as number and not as character*/ /* you can also change "step_amount" to 1 to change the amount number changes by */
    number.value = newValue

    /* this is a condition (if statement) */
    if (add.disabled === true) {
        add.disabled = false
    }

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true
    } 
}
const addHandler = () => {
    const newValue = parseInt(number.value) + STEP_AMOUNT
    number.value = newValue

    if (subtract.disabled === true) {
        subtract.disabled = false
    }

    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    } 
}

/* "when this happens... */
subtract.addEventListener('click', subtractHandler)
add.addEventListener('click',addHandler)
