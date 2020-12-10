console.log("CONNECTED")

function adjustPfams(){
    console.log("working, btn pressed")
    let userInput = document.getElementById('pfamsField').value
    let newPfams = userInput.replace(/\n/g,",")
    let numOfPfams = newPfams.split(',').length
    document.getElementById('finalNumOfPfams').innerHTML = numOfPfams
    document.getElementById('finalPfams').innerHTML = newPfams
}

let pfams = "hello"
let newPfams = pfams.replace(/\n/g,",")
let numOfPfams = newPfams.split(',').length

console.log(newPfams)
console.log('there are ' + numOfPfams + ' PFAMS added')

