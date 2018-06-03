// Create top toast




function displayToastMessage(message) {
  var toastTop = undefined;
    toastTop = app.toast.create({
        text: message,
        position: 'top',
        closeTimeout: 2000,


    });
    toastTop.open();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }



  async function waitForToast(messageOne, messageTwo){

      if(messageOne == "" && messageTwo != "") {
      displayToastMessage(messageTwo);
      await sleep(2500);
      }

      else if(messageOne != "" && messageTwo == "") {
        displayToastMessage(messageOne);
        await sleep(2500);
      }
      else {
        displayToastMessage(messageOne);
        await sleep(2500);
        displayToastMessage(messageTwo);
      }
  }
