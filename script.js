$('#guarda_usuario').click(function(){
    var fecha = $('#fecha').val()
    var nombre_del_oficial = $('#nombre_del_oficial').val()
    var matricula_del_vehiculo = $('#matricula_del_vehiculo').val()
    var folio = $('#folio').val()
    var ubicacion = $('#ubicacion').val()
    var nombre_del_infractor = $('#nombre_del_infractor').val()
    var total_a_pagar = $('#total_a_pagar').val()
    var motivo_de_la_multa =$('#motivo_de_la_multa').val()
    var tipo_de_vehiculo =$('#tipo_de_vehiculo').val()
    var data_user = {'fecha' : fecha, 'nombre_del_oficial': nombre_del_oficial, 
    'matricula_del_vehiculo' : matricula_del_vehiculo,
    'folio' : folio, 'ubicacion' : ubicacion, 'nombre_del_infractor' : nombre_del_infractor, 
    'total_a_pagar' : total_a_pagar ,'motivo_de_la_multa': motivo_de_la_multa, 
    'tipo_de_vehiculo' : tipo_de_vehiculo}

    $.ajax({
        type:'POST',
        url: 'http://localhost:8080/user',
        contentType: 'application/json',
        data: JSON.stringify(data_user)
    }).done(function(){
        alert('Multa agregada con exito')
    }).fail(function(err){
        alert(err)
    })

})

$('#obtener_usuario').click(function(){
     var id = $('#id').val()
       fetch('http://localhost:8080/user?id=' + id)
            .then (response => response.json())
            .then (data => datos = JSON.stringify(data))
            .then (data => datos1 = JSON.parse(data))
            .then (data => fecha1 = datos1.fecha)
            .then (data => nombre_del_oficial1 = datos1.nombre_del_oficial)
            .then (data => matricula_del_vehiculo1 = datos1.matricula_del_vehiculo)
            .then (data => folio1 = datos1.folio)
            .then (data => ubicacion1 = datos1.ubicacion)
            .then (data => nombre_del_infractor1 = datos1.nombre_del_infractor)
            .then (data => total_a_pagar1 = datos1.total_a_pagar)
            .then (data => motivo_de_la_multa1 = datos1.motivo_de_la_multa)
            .then (data => tipo_de_vehiculo1 = datos1.tipo_de_vehiculo)
            .then (data => $('#fecha2').val(fecha1))
            .then (data => $('#nombre_del_oficial2').val(nombre_del_oficial1))
            .then (data => $('#matricula_del_vehiculo2').val(matricula_del_vehiculo1))
            .then (data => $('#folio2').val(folio1))
            .then (data => $('#ubicacion2').val(ubicacion1))
            .then (data => $('#nombre_del_infractor2').val(nombre_del_infractor1))
            .then (data => $('#total_a_pagar2').val(total_a_pagar1))
            .then (data => $('#motivo_de_la_multa2').val(motivo_de_la_multa1))
            .then (data => $('#tipo_de_vehiculo2').val(tipo_de_vehiculo1))
})



