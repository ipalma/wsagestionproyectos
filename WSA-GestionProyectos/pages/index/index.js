// Para obtener una introducción a la plantilla Control de página, consulte la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var listaTareas = new WinJS.Binding.List([]);
    var listProject = [];
    var listaProyectos = new WinJS.Binding.List([]);
    WinJS.Namespace.define("DatosDelUsuario", {
        MisTarea: listaTareas,
        MisProyectos: listaProyectos //esto está recien modificado
    });

    function update1(datos) {
        DatosDelUsuario.MisTarea.push(datos);
    }

    function update(data) {
        var datos = data;
        DatosDelUsuario.MisTarea.length = 0;

        for (var i = 0; i < data.length; i++) {
            listProject.push(data[i]);
            
            for (var j = 0; j < data[i].Tarea.length; j++) {
                var mensaj = data[i].Tarea[j];
                
                if (mensaj.idUsuarioAsignado === Global.Usuario.id) {
                    update1(mensaj);
                }
            }
            
        }
        //obtenerNombreProyectos(listProject);
    }

    WinJS.UI.Pages.define("/pages/index/index.html", {
        // Se llama a esta función cuando un usuario navega a esta página. Esta
        // rellena los elementos de la página con los datos de la aplicación.
        ready: function (element, options) {

            WinJS.Binding.processAll(document.querySelector("#titulo","#fotografia"),
                Global.Usuario);
            update(Global.Usuario.Proyecto_Tarea_Grupo);
            
        },

        unload: function () {
            // TODO: Responder a las navegaciones fuera de esta página.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Responder a los cambios en el diseño.
        }
    });
})();
