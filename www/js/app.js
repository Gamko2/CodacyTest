// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'com.whatever',
  name: 'Aleculator',
  theme: 'auto',
});

$$('.popup-about').on('popup:open', function (e, popup) {
console.log('About popup open');
});
$$('.popup-about').on('popup:opened', function (e, popup) {
 console.log('About popup opened');
});
