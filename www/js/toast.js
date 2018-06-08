// Create top toast



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
  


  async function waitBetweenToast(messageOne, messageTwo){
      displayToastMessage(messageOne);
      await sleep(2500);
      displayToastMessage(messageTwo);
  }


