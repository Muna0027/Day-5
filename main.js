function loadScript(src){
const script = document.createElement('script');
script.src = src;
document.head.prepend(script);
}

loadScript('countries.js');
loadScript('web_techs.js');

