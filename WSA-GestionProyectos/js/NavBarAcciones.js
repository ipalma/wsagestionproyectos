(function() {
    var accionesUsuarios = function () {

        //document.getElementById("btnMisContactos").addEventListener('click', function() {
        //    WinJS.Navigation.navigate("/pages/usuarios/misContactos.html", WinJS.Navigation.state);
        //});
        
        //document.getElementById("navNuevosUsuarios").addEventListener('click', function() {
        //    WinJS.Navigation.navigate("/pages/usuarios/altaUsuarios.html", WinJS.Navigation.state);
        //});
        document.getElementById("navMisContactos").addEventListener('click', function() {
            WinJS.Navigation.navigate("/pages/usuarios/misContactos.html", WinJS.Navigation.state);
        });
        //document.getElementById("navTodosUsuario").addEventListener('click', function() {
        //    WinJS.Navigation.navigate("/pages/usuarios/todosUsuarios.html", WinJS.Navigation.state);
        //});

    };
    var accionesProyectos = function() {
        document.getElementById("navMisProyectos").addEventListener('click', function() {
            WinJS.Navigation.navigate("/pages/usuarios/altaUsuarios.html", WinJS.Navigation.state);
        });
        document.getElementById("navTodosProyectos").addEventListener('click', function() {
            WinJS.Navigation.navigate("/pages/usuarios/misContactos.html", WinJS.Navigation.state);
        });
        document.getElementById("navNuevosProyectos").addEventListener('click', function() {
            WinJS.Navigation.navigate("/pages/usuarios/todosUsuarios.html", WinJS.Navigation.state);
        });

    };
    var accionesTareas = function() {
        document.getElementById("navMisTareas").addEventListener('click', function() {
            WinJS.Navigation.navigate("/pages/usuarios/altaUsuarios.html", WinJS.Navigation.state);
        });
        document.getElementById("navTodasTareas").addEventListener('click', function() {
            WinJS.Navigation.navigate("/pages/usuarios/misContactos.html", WinJS.Navigation.state);
        });
        document.getElementById("navNuevaTarea").addEventListener('click', function() {
            WinJS.Navigation.navigate("/pages/usuarios/todosUsuarios.html", WinJS.Navigation.state);
        });

    };

    function iniciarAcciones() {
        accionesUsuarios();
    }

    WinJS.Namespace.define("NavAcciones", {
        AccionesUsuarios: iniciarAcciones

});
 
})();