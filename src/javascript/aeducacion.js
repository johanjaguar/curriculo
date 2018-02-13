function setEducacion(instituciones, selector) {
  let elem = document.querySelector(selector);
  elem.innerHTML = "";

  for (var key in instituciones) {
    var ref = instituciones[key];
    var languaje = document.documentElement.lang;

    if (languaje == "en") {
      elem.innerHTML = elem.innerHTML + educacion(ref.icono, ref.fecha, ref.nombre, ref.cursoEng);
    } else {
      elem.innerHTML = elem.innerHTML + educacion(ref.icono, ref.fecha, ref.nombre, ref.curso);
    }
  }
}

function educacion(icono, anio, institucion, carrera) {
  var html = ''; 
  html += '<div class="educationItem">';
  html += '	<p class="eiIcono">';
  html += '		<i class="fa fa-' + icono + '"></i>';
  html += '</p>';
  html += '	<p class="eiAnio">' + anio + '</p>';
  html += '	<p class="eiInstitucion">' + institucion + '</p>';
  html += '	<p class="eiCarrera">' + carrera + '</p>';
  html += '</div>';
  return html;
}
