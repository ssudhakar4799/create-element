
//createelement
function htmladd() {
    var element = document.createElement('a');
    var textnote = document.createTextNode('go to google');
    element.appendChild(textnote);
    element.setAttribute('href', 'https://www.google.com');
    console.log(element);
    var bodyElement = document.getElementsByTagName('body');
    var bodyTag = bodyElement[0];
    bodyTag.appendChild(element);
    buttonelement.setAttribute('disabled', 'disabled');

}
buttonelement = document.getElementById('showbutton');
buttonelement.addEventListener('click', htmladd);

// function currenttime() {
//     var date=new Date();
//     var getdate=date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
//     var element=document.createElement('p');
//     element.innerText=getdate;
//     bodyelement=document.getElementsByTagName('body');
//     bodytag = bodyelement[0];
//     bodytag.appendChild(element);
//     buttonelement.setAttribute('disabled','disabled');

// }
// buttonelement=document.getElementById('showbutton');
// buttonelement .addEventListener('click',currenttime);




















