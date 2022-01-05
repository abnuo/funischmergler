// content.js

let color = '#3aa757';
var divs = Array.from(document.getElementsByTagName('div'));
var imgs = Array.from(document.getElementsByTagName('img'));
var texts = Array.from(document.getElementsByTagName('span')).concat(document.getElementsByTagName('p')).concat(document.getElementsByTagName('h1'));
divs = divs.filter(function(x) {
     return x !== undefined;
});
imgs = imgs.filter(function(x) {
     return x !== undefined;
});
texts = texts.filter(function(x) {
     return x !== undefined;
});
var schmergled = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
function schmergle() {
  for(var i=0; i<divs.length; i++) {
    //div = divs[Math.floor(Math.random() * divs.length)];
	// !div in schmergled
	div = divs[i];
	if (Math.floor(Math.random() * 50) > 25) {
	  if (true) {
        console.log("ColoredSchmergle");
        style = "background-color: rgb("+getRandomInt(0,255)+", "+getRandomInt(0,255)+", "+getRandomInt(0,255)+");";
	    div.style = style;
	  }
	} else {
	  if (!schmergled.includes(div)) {
	    console.log("ImgurSchmergle");
		text = texts[Math.floor(Math.random() * texts.length)]
	    style = "background-image: url(\""+"https://i.imgur.com/"+makeid(5)+".png"+"\");";
	    div.style = style;
	    imgs[Math.floor(Math.random() * imgs.length)].src = "https://i.imgur.com/"+makeid(5)+".png";
		text.innerHTML = "New";
		schmergled.push(div);
	}
  }
  console.log("Schmergle. "+schmergled);
 }
}

setInterval(schmergle, 1000/60);