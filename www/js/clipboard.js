let clipboard = new ClipboardJS('.btn');

clipboard.on('success', function (e) {
  /*alert("Successfully copied to Clipboard");*/
  
  
 
  waitForToast("Copied to Clipboard","Pls show later");
  //displayToastMessage("Copied to Clipboard");
});

clipboard.on('error', function (e) {
  alert("Copy to Clipboard failed");
});
