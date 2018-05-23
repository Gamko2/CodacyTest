
// Create top toast

var toastTop = undefined;


function displayToastMessage(message) {
    toastTop = app.toast.create({
        text: message,
        position: 'top',
        closeTimeout: 2000,
        

    });
    toastTop.open();
}
