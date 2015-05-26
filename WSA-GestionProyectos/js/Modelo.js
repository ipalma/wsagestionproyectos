(function () {

    var Usuario = function (nombre, apellido, email, password, foto, habilidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.foto = foto || "http://assets5.domestika.org/project-items/000/162/675/162675-15-big.jpg?1316703867";
        this.habilidad = habilidad;
    };

    var Proyecto_Tarea_Grupo = function(idUsuario, idProyecto, idGrupo, jefeGrupo) {
        this.idUsuario = idUsuario;
        this.idProyecto = idProyecto;
        this.idGrupo = idGrupo;
        this.jefeGrupo = jefeGrupo;
    };

    var Proyecto = function(nombre, fechaInicio, fechaFin, descripcion, fechaCreacion, idEstado, idPrioridad) {
        this.nombre = nombre;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.descripcion = descripcion;
        this.fechaCreacion = fechaCreacion;
        this.idEstado = idEstado;
        this.idPrioridad = idPrioridad;
    };

    var Tarea = function(nombre, fechaCreacion, fechaAsignacion, tiempoEstimado, descripcion, idUsuarioAsignado, idProyecto, idGrupo, idEstado, idPrioridad, comentarios, idUsuarioCreador) {
        this.nombre = nombre;
        this.fechaCreacion = fechaCreacion;
        this.fechaAsignacion = fechaAsignacion;
        this.tiempoEstimado = tiempoEstimado;
        this.descripcion = descripcion;
        this.idUsuarioAsignado = idUsuarioAsignado;
        this.idProyecto = idProyecto;
        this.idGrupo = idGrupo;
        this.idEstado = idEstado;
        this.idPrioridad = idPrioridad;
        this.comentarios = comentarios;
        this.idUsuarioCreador = idUsuarioCreador;
    };


    var Mensaje = function (idRem, fotoRem, idDest, fecha, contenido, nombreRem, emailRem, estado) {
        this.idRem = idRem;
        this.fotoRem = fotoRem;
        this.idDest = idDest;
        this.fecha = fecha;
        this.contenido = contenido;
        this.nombreRem = nombreRem;
        this.emailRem = emailRem;
        this.estado = estado;
    };
   


    WinJS.Namespace.define("Modelo", {
        Usuario: Usuario,
        Proyecto_Tarea_Grupo: Proyecto_Tarea_Grupo,
        Proyecto: Proyecto,
        Tarea: Tarea,
        Mensaje: Mensaje

    });

    WinJS.Namespace.define("Global", {
        Usuario: null
    });

})();