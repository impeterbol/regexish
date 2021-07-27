

// dark mode switch
const toggleSwitch = document.querySelector('.switch label input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


// saving to localstorage future preferences 
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); 
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

// checking user preferences for dark / light theme 
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
//functon end
}


function adjustPfams(){
    // console.log("working, btn pressed")
    let userInput = document.getElementById('pfamsField').value
    // console.log(userInput)
    let newPfams = userInput.replace(/\n/g,";")
    let numOfPfams = newPfams.split(';').length
    document.getElementById('finalNumOfPfams').innerHTML = numOfPfams
    document.getElementById('finalPfams').innerHTML = newPfams
    document.getElementById('finalPfams').disabled = true
}

function replaceCommas(){
    // console.log("working, btn pressed")
    let userInput1 = document.getElementById('pfamsToReplaceCommas').value
    // console.log(userInput1)
    let newPfams1 = userInput1.replace(/,/g,";")
    let numOfPfams1 = newPfams1.split(';').length
    document.getElementById('finalPfamsReplacedWithSemicolon').innerHTML = numOfPfams1
    document.getElementById('textAreaReplacedSemicolon').innerHTML = newPfams1
    document.getElementById('textAreaReplacedSemicolon').disabled = true

}


function comparePfams(){
    // console.log("working");
    let userInputExcel = document.getElementById('compareInitialTextArea');
    let updUserInput = userInputExcel.value.replace(/\n/g,";")
    let numOfPfamsExcel = updUserInput.split(';').length
    let userInputProgramConfig = document.getElementById('compareFromConfigTextArea');
    let numOfPfamsPMT = userInputProgramConfig.value.split(';').length
    
    document.getElementById('excelLength').innerHTML = numOfPfamsExcel
    document.getElementById('pmtLength').innerHTML = numOfPfamsPMT
    if(numOfPfamsExcel>numOfPfamsPMT)
        document.getElementById('res').innerHTML = "Number of PFAMS in Excel("+numOfPfamsExcel+") is more than in PMT("+numOfPfamsPMT+")"
    else if (numOfPfamsExcel=numOfPfamsPMT)
    document.getElementById('res').innerHTML = "Number of PFAMS in Excel("+numOfPfamsExcel+") equals to PMT("+numOfPfamsPMT+")"
    else if (numOfPfamsExcel<numOfPfamsPMT)
    document.getElementById('res').innerHTML = "Number of PFAMS in Excel("+numOfPfamsExcel+") is less than in PMT("+numOfPfamsPMT+")"
    var excelArr = userInputExcel.value.replace(/\n/g,";").split(";");
   var pmtArr = userInputProgramConfig.value.split(";")
   
 
//    console.log("out of the loop")
   
   var finalArr = [];
   var counter = 0;
   
   for(let i =0; i<excelArr.length;i++){
      
       for(let j=0;j<pmtArr.length;j++){
           
          
           if(excelArr[i]==pmtArr[j]){
                       
            // console.log(excelArr[i] + "this is excel")
            // console.log(pmtArr[j] + "this is pmt")
            counter++;
           
        }
       }
   }
   console.log(counter)
  if(counter==excelArr.length){
    document.getElementById('difference').innerHTML = "PFAMs from excel matched the list from PMT - all good!"
    userInputExcel.style.borderColor = "green";
    document.getElementById('difference').style.color = "green"
  }
  else{
       document.getElementById('difference').innerHTML = "PFAMs from excel didn't match the list from PMT - worth checking!"
            userInputExcel.style.borderColor = "red";
            document.getElementById('difference').style.color = "red"
  }
   //end of function
}


