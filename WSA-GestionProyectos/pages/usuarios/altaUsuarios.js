// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var listaHabilidades = new WinJS.Binding.List([]);
    var nomHabilidad = [];
    var habil = [];

    WinJS.Namespace.define("AltaUsuarios", { ListaHabilidades: listaHabilidades });

    function listHab(data) {
        AltaUsuarios.ListaHabilidades.length = 0;

        for (var i = 0; i < data.length; i++) {
            AltaUsuarios.ListaHabilidades.push(data[i]);
        }
    }

    //function nomHab(datos) {
    //    if(datos){
    //        nomHabilidad.push(datos);
    //    }
    //}

    var usuario;


    function guardarUsuario(usu) {
        Azure.AltaUsuario(usu).done(function(res) {
            new Windows.UI.Popups.MessageDialog("Subida completada").showAsync();
            usuario = undefined;
        });
    }
    WinJS.UI.Pages.define("/pages/usuarios/altaUsuarios.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            Azure.GetHabilidades().done(function(res) {
                listHab(JSON.parse(res.response));
            });

            document.getElementById("btnAddUsuario").addEventListener("click",
                function () {
                    var habilUsuario = [];
                    var nomHabil = [];
                    var habilidades = document.getElementsByName("habilidades");
                    if (usuario == undefined) {
                        nomHabil = AltaUsuarios.ListaHabilidades;
                        for (var j = 0; j < habilidades.length; j++) {
                            
                            if (habilidades[j].checked) {

                                habilUsuario.push({
                                    id: habilidades[j].value, 
                                    nombre: habilidades[j].innerHTML});

                            } 
                        }


                        usuario = new Modelo.Usuario(
                            document.getElementById("txtNom").value,
                            document.getElementById("txtApe").value,
                            document.getElementById("txtEmailAlta").value,
                            document.getElementById("txtPassAlta").value,
                            "http://assets5.domestika.org/project-items/000/162/675/162675-15-big.jpg?1316703867",
                            habilUsuario
                        );
                        guardarUsuario(usuario);
                        nomHabilidad.length = 0;

                    } else {
                        
                    }
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
