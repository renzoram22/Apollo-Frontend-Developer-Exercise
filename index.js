function UpdateResponse(value) {
  if (value === 1) {
    document.getElementById('secondStepContainer').classList.remove("Hide");
    document.getElementById('secondStepNumber').classList.remove("Hide");
    document.getElementById('secondStepLine').setAttribute("height", "100px");
    document.getElementById('firstStepNumber').innerHTML = "";
    document.getElementById('firstStepNumber').innerHTML = "&#10003;";
    document.getElementById('firstStepNumber').style.setProperty('background-color', "white");
    document.getElementById('firstStepNumber').style.setProperty('color', "#00c221");

  }else {
    document.getElementById('secondStepContainer').classList.add("Hide");
    document.getElementById('secondStepNumber').classList.add("Hide");
    document.getElementById('secondStepLine').setAttribute("height", "0px");
    document.getElementById('firstStepNumber').innerHTML = "";
    document.getElementById('firstStepNumber').innerHTML = "1";
    document.getElementById('firstStepNumber').style.setProperty('background-color', "#00c221");
    document.getElementById('firstStepNumber').style.setProperty('color', "white");
  }
}

function sendCode() {
  generateCode();
  var radioCode = document.getElementsByName('Method');
  var selectedMethod;
     radioCode.forEach(e => {
         if (e.checked) {
            selectedMethod = e.value;
            selectedType = e.id;
            switch (selectedType) {
              case "sms":
                selectedMessage = "An SMS has been sent to your mobile phone.<br> Please check your messages ("+selectedMethod+") to obtain the validation code."
                break;
              case "voice":
              selectedMessage = "You are going to receive a voice call.<br>Please answer the voicecall ("+selectedMethod+") to obtain the validation code."
                break;
              case "email":
              selectedMessage = "An email has been sent to your mail box.<br> Please check your email ("+selectedMethod+") to obtain the validation code."
                break;
            }
         }

})
var secondStepNumber = document.getElementById('secondStepNumber');
document.getElementById('thirdStepContainer').classList.remove("Hide");
document.getElementById('thirdStepNumber').classList.remove("Hide");
document.getElementById('thirdStepLine').setAttribute("height", "180px");
secondStepNumber.innerHTML = "";
secondStepNumber.innerHTML = "&#10003;";
secondStepNumber.style.setProperty('background-color', "white");
secondStepNumber.style.setProperty('color', "#00c221");
document.getElementById('alertMessage').innerHTML = selectedMessage;
}

var validationCode;
function generateCode(){
  validationCode = Math.floor(Math.random() * 1000000000000)
  document.getElementById('validationCodeNumber').innerHTML = validationCode;
  document.getElementById('VerifyButton').classList.remove("Disable");
  var modal = document.getElementById("CodeModal");
  modal.style.display = "block";
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function verifyInput(){
  var val = document.getElementById('inputCode').value;
  console.log(val);

  if(/^\d+$/.test(val)) {
    console.log("only number");
    document.getElementById('AlertaBubble').classList.add("Hide");

  }
  else {
    if (val == "") {
      document.getElementById('AlertaBubble').classList.add("Hide");
    }else {
      document.getElementById('AlertaBubble').classList.remove("Hide");
    }
  }
}


function verifyCode(){
  var val = parseFloat(document.getElementById('inputCode').value);
  if (val === validationCode) {
  document.getElementById('Mask').innerHTML = ''
  document.getElementById('Mask').innerHTML = '<div class="Result"><img src="comprobado.png" alt=""> Verification completed successfully!</div>'
  }else {
    document.getElementById('AlertBox').innerHTML = '<span class="closebtn" onclick="this.parentElement.style.display=`none`;">&times;</span>Wrong code. Please try again';
    document.getElementById('AlertBox').classList.add("AlertBox");
  }

}
