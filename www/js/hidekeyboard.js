function hideKeyboard() {
  var ua = navigator.userAgent.toLowerCase();
  var gadgetAndroid = ua.indexOf("android") > -1;
  var gadgetIOS = ua.indexOf("ios") > -1;
  //console.log(gadgetAndroid);
  //console.log(gadgetIOS);
  if(gadgetAndroid == true || gadgetIOS == true) {
    document.getElementById('input').blur();
  }
}
