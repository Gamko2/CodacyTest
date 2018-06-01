// Create top toast

var toastTop = undefined;


async function displayToastMessage(message) {
        toastTop = app.toast.create({
            text: message,
            position: 'top',
            closeTimeout: 2000,
    
    
        });
        toastTop.open();
        //toastTop.close();
        
        

    
  
   
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  


  async function waitForToast(messageOne, messageTwo){
      displayToastMessage(messageOne);
      await sleep(2500);
      displayToastMessage(messageTwo);
  }


