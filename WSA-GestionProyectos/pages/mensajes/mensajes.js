// Para obtener una introducción a la plantilla Control de página, consulte la siguiente documentación:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    var lista = new WinJS.Binding.List([]);
    WinJS.Namespace.define("DatosMensaje", { MisMensajes: lista });

    function update1(datos) {
        datos.fotoRem = "http://mvcproyectos.azurewebsites.net/img/FotoPerfilesUsuario/" + datos.fotoRem;

        DatosMensaje.MisMensajes.push(datos);
    }

    function update(data) {
        DatosMensaje.MisMensajes.length = 0;

        for (var i = 0; i < data.length; i++) {

            var mensaj = data[i];

            update1(mensaj);
        }

    }


    WinJS.UI.Pages.define("/pages/mensajes/mensajes.html", {
        // Se llama a esta función cuando un usuario navega a esta página. Esta
        // rellena los elementos de la página con los datos de la aplicación.
        ready: function (element, options) {
            var usuActual = JSON.parse(localStorage.Usuario).id;
            Azure.GetPorMisMensajes(usuActual).done(function (res) {
                update(JSON.parse(res.response));
            });
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
