let display = document.getElementById("num_box")
let buttons = document.querySelectorAll("button")
let string = ""
buttons.forEach(function(element) {
    element.addEventListener("click", function(b) {
        if (b.target.innerText == "=") {
            string = String(eval(string))
            display.value = string

        } else if (b.target.innerText == "AC") {
            string = ""
            display.value = string

        } else if (b.target.innerText == "DEL") {
            string = string.substring(0, string.length - 1)
            display.value = string

        } else if (b.target.id == "plus_minus") {
            string = String(-eval(string))
            display.value = string

        } else {
            string += b.target.innerText
            display.value = string
        }
    })
})