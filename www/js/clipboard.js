let clipboard = new ClipboardJS('.btn');

clipboard.on('success', function (e) {
  alert("Successfully copied to Clipboard");

});

clipboard.on('error', function (e) {
  alert("Copy to Clipboard failed");
});
