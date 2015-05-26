(function () {
    var url_base = "https://webapiproyectos.azurewebsites.net/api/";

    /*Login*/
    function login(email, password) {
        var opc = {
            type: "GET",
            url: url_base + "Usuario?email="+email+"&password="+password
        };
        return WinJS.xhr(opc);
    }


    function getUsuarios() {
        var opc = {
            type: "GET",
            url: url_base + "Usuario"
        };
        return WinJS.xhr(opc);
    }

    function getMisProyectos(id) {
        var opc = {
            type: "GET",
            url: url_base + "Usuario/"+ id
        };
        return WinJS.xhr(opc);
    }

    function getPorMisProyectos(id) {
        var opc = {
            type: "GET",
            url: url_base + "Proyecto/" + id
        }
        return WinJS.xhr(opc);
    }

    function getPorMisMensajes(id) {
        var opc = {
            type: "GET",
            url: url_base + "Mensaje?idDest="+id+"&idRem="+id


        }
        return WinJS.xhr(opc);
    }

    function altaUsuario(usuario) {
        var opc = {
            type: "POST",
            url: url_base + "Usuario",
            data: JSON.stringify(usuario),
            headers: { "Content-Type": "application/json" }

        };

        return WinJS.xhr(opc);

    }
    
    function getHabilidades() {
        var opc = {
            type: "GET",
            url: url_base + "Habilidad"
        }
        return WinJS.xhr(opc);
    }
    function getHabilidadesPorId(id) {
        var opc = {
            type: "GET",
            url: url_base + "Habilidad/" + id
        }
        return WinJS.xhr(opc);
    }

    function getMisTareas(idUsuario, idProyecto) {
        var opc = {
            type: "GET",
            url: url_base + "Tarea?=idUsuarioAsignado=" + idUsuario + "$idProyecto=" + idProyecto
        }
        return WinJS.xhr(opc);
    }


    WinJS.Namespace.define("Azure", {
        Get: getUsuarios,
        GetMisProyectos: getMisProyectos,
        GetPorMisProyectos: getPorMisProyectos,
        AltaUsuario: altaUsuario,
        Login: login,
        GetHabilidades: getHabilidades,
        GetHabilidadesPorId: getHabilidadesPorId,
        GetPorMisMensajes: getPorMisMensajes,
        GetMisTareas: getMisTareas
    });

})();


