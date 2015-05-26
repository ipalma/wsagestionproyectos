// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var lista = new WinJS.Binding.List([]);
    WinJS.Namespace.define("DatosProyecto", { MisProyectos: lista });

    function update1(datos) {
        DatosProyecto.MisProyectos.push(datos);
    }

    function update(data) {
        DatosProyecto.MisProyectos.length = 0;

        for (var i = 0; i < data.Proyecto_Tarea_Grupo.length; i++) {

            var id = data.Proyecto_Tarea_Grupo[i].idProyecto;

            Azure.GetPorMisProyectos(id).done(function (res) {
                update1(JSON.parse(res.response));

            });


        }

    }


    WinJS.UI.Pages.define("/pages/proyectos/misProyectos.html", {
        ready: function (element, options) {
            var idActual = JSON.parse(localStorage.Usuario).id;
            Azure.GetMisProyectos(idActual).done(function (res) {
                update(JSON.parse(res.response));
            });

            //document.getElementById("").value;

        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();
