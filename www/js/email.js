function sendemail()
{
   var result = document.getElementById('input').value;
   var link = 'mailto:'+'?subject=Message from Alekulator'
   +'&body='+'Result = '+result;
   window.location.href = link;
 }
