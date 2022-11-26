let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    count = count + 1
    countEl.textContent = count
        // can also be done using this one line below
        // document.getElementById("count-el").innerText = count
}

let saveEl = document.getElementById("save-el")

function save() {
    let newVar = count + " - "
    saveEl.textContent += newVar
    count = 0
    countEl.textContent = count
}