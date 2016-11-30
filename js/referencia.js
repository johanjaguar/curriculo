function referencia(link, imagen, empresa, cargo, telefono, anio='', jefe=''){
    var html = '';
		html += '<div class="workItem">';
		html += '	<a href="'+link+'" target="_blank">';
		html += '		<p class="wiImgEmpresa"><img src="img/'+imagen+'.png"/></p>';
								if( empresa.length > 0 ){ html += '		<p class="wiEmpresa">'+empresa+'</p>'; }		
								if( cargo.length > 0 ){ html += '		<p class="wiCargo">'+cargo+'</p>';}
								if( anio.length > 0 ){ html += '		<p class="wiAnio">'+anio+'</p>'; }		
								if( jefe.length > 0 ){ html += '		<p class="wiJefe">Jefe Inmediato:<br/>'+jefe+'</p>';}
								if( telefono.length > 0 ){ html += '		<p class="wiTelefono">'+telefono+'</p>';}
		html += '	</a>';
		html += '</div>';
    return html;
}