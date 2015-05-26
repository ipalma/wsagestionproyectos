// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    var lista = new WinJS.Binding.List([]);
    WinJS.Namespace.define("Datos", { Usuarios: lista });

    function update(data) {
        Datos.Usuarios.length = 0;

        for (var i = 0; i < data.length; i++) {
            data[i].foto = "http://mvcproyectos.azurewebsites.net/img/FotoPerfilesUsuario/" + data[i].foto;
            Datos.Usuarios.push(data[i]);

        }

    }


    WinJS.UI.Pages.define("/pages/usuarios/ListadoDeUsuarios.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            Azure.Get().done(function (res) {
                update(JSON.parse(res.response));
            });
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
