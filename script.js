console.log("CONNECTED")
document.querySelectorAll('.btnPfams').onclick = function() {
    console.log('testing')
}


function adjustPfams(){
    console.log("working, btn pressed")
    let userInput = document.getElementById('pfamsField').value
    let newPfams = userInput.replace(/\n/g,";")
    let numOfPfams = newPfams.split(';').length
    document.getElementById('finalNumOfPfams').innerHTML = numOfPfams
    document.getElementById('finalPfams').innerHTML = newPfams
    document.getElementById('finalPfams').disabled = true
}

