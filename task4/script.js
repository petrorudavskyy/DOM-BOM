//start
var getLanguage = function () {
  //all inputs
  var input = document.getElementsByName('lang');
  //if localstorage not have language, default language is ukrainan
  if (localStorage.length !== 0) {
    defaultLang = localStorage.getItem("currentLang");
  } 
  else {
    var defaultLang = 'ua';
  }

  //if language selected, get value
  input.forEach(function (input) {
    if (input.checked) {
      defaultLang = input.parentNode.textContent.trim().toLowerCase();
    }
  });

  return defaultLang;
}

var currentLang = getLanguage();
//add inputs
var input = document.getElementsByName('lang');
// elentlistener for every radio, first
input[2].addEventListener('click', function () {
  selectLanguage();
});
//second radio
input[1].addEventListener('click', function () {
  selectLanguage();
});
//third
input[0].addEventListener('click', function () {
  selectLanguage();
});

selectLanguage();
//queryselector, save chosen language in local storage when click to button
var $save = document.querySelector('html body button#save')
$save.addEventListener('click', function(){
  localStorage.setItem("currentLang", getLanguage());
  invisible(getLanguage());
});

//language that not chosen make invisible
function invisible(currentLang) {
  var turnOff = Array.from(document.getElementsByClassName('lang'));
  for (var i = 0; i < turnOff.length; i++) {
    if (!turnOff[i].classList.contains("lang-" + currentLang)) {
      if (turnOff[i].classList.contains('visible')) {
        turnOff[i].classList.remove('visible');
      }
    }
  }
}

// if language is chosen make visible
function selectLanguage() {
  currentLang = getLanguage();
  var langEls = document.getElementsByClassName('lang-' + currentLang);
  
  for (var i = 0; i < langEls.length; i++) {
    var langEl = langEls[i];
    langEl.classList.add('visible');
  }
  invisible(currentLang);
}
//finish)