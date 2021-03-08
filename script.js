console.log("CONNECTED")
document.querySelectorAll('.btnPfams').onclick = function() {
    console.log('testing')
}


function adjustPfams(){
    console.log("working, btn pressed")
    let userInput = document.getElementById('pfamsField').value
    console.log(userInput)
    let newPfams = userInput.replace(/\n/g,";")
    let numOfPfams = newPfams.split(';').length
    document.getElementById('finalNumOfPfams').innerHTML = numOfPfams
    document.getElementById('finalPfams').innerHTML = newPfams
    document.getElementById('finalPfams').disabled = true
}

function comparePfams(){
    console.log("working");
    let userInputExcel = document.getElementById('compareInitialTextArea');
    let userInputProgramConfig = document.getElementById('compareFromConfigTextArea');
    let updUserInput = userInputExcel.value.replace(/\n/g,";")
    
    console.log(userInputExcel.value)
    console.log(userInputProgramConfig.value)
    if (updUserInput == userInputProgramConfig.value)
    userInputExcel.style.borderColor = "#2EFE2E";
  else
  userInputExcel.style.borderColor = "red";
  

}


