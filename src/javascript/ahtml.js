function llenaDOM(data) {
  var textos = "";

  var idiomaUrl = getQueryVariable('lang');
  
  var languaje = (idiomaUrl !== null && idiomaUrl !== '' && idiomaUrl !== false) ? idiomaUrl : document.documentElement.lang;
  
  if (languaje == "en") { 
    textos = data.textos.english;
  } else {
    textos = data.textos.spanish;
  }


  setLanguages(data, ".languageUl");
  setReferencias(data.referencias, '#workItems');
  setReferencias(data.referenciasPersonales, '#personalItems');
  setEducacion(data.instituciones, '#educationItems');
  setEducacion(data.workshops, '#workshopItems');
  setSkills(data.skills, '#professionalSkills');
  setIntereses(data.intereses, "#interesesItem");
  fillHTML(textos);
  fillLinks(data.links);
  setThemeList(data.temas);
}

function fillHTML(textos) {
  for (var key in textos) {
    if (textos.hasOwnProperty(key)) {
      setText(key, textos[key]);
    }
  }
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return (false);
}
