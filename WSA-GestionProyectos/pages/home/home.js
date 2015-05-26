(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function(element, options) {
            

            document.body.querySelector('#NavBar').addEventListener('invoked', this.navbarInvoked.bind(this));
            //document.body.querySelector('#navBarPrincipal').addEventListener('invoked', this.navbarInvoked.bind(this));
            document.body.querySelector('#usuarioNavBarContainer').addEventListener('invoked', this.navbarInvoked.bind(this));
            document.body.querySelector('#proyectoNavBarContainer').addEventListener('invoked', this.navbarInvoked.bind(this));
            document.body.querySelector('#tareaNavBarContainer').addEventListener('invoked', this.navbarInvoked.bind(this));

            document.getElementById('nav');

            var navBarContainerEl = document.body.querySelector('#NavBar .NavBarContainer');
            if (navBarContainerEl) {
                this.setupNavBarContainer();
            } else {
                var navBarEl = document.getElementById('NavBar');
                navBarEl.addEventListener('childrenprocessed', this.setupNavBarContainer.bind(this));
            }
            document.getElementById("btnLogin").addEventListener("click", function() {
                var email = document.getElementById("txtEmail").value;
                var pwd = document.getElementById("txtPass").value;


                Azure.Login(email, pwd).then(function(res) {


                    var json = JSON.parse(res.response);


                    localStorage.Usuario = JSON.stringify(json);
                    WinJS.Navigation.navigate("/pages/index/index.html");


                }, function(err) {

                    new Windows.UI.Popups.MessageDialog("Datos incorrectos").showAsync();
                });


            });
            


        },

        navbarInvoked: function(ev) {
            var navbarCommand = ev.detail.navbarCommand;
            var variable = "";
            //if (navbarCommand.label === 'Inicio' || navbarCommand.label === 'Usuarios' || navbarCommand.label === 'Proyectos' || navbarCommand.label === 'Tareas' || navbarCommand.label === 'Mensajes') {
            //    if (navbarCommand.label === 'Inicio') {
            //        variable = '/pages/home/home.html';
            //    } else if (navbarCommand.label === 'Usuarios') {
            //        variable = '/pages/usuarios/indexUsuarios.html';
            //    } else if (navbarCommand.label === 'Proyectos') {
            //        variable = '/pages/proyectos/indexProyectos.html';
            //    } else if (navbarCommand.label === 'Tareas') {
            //        variable = '/pages/tareas/indexTareas.html';
            //    }


            switch (navbarCommand.label) {
            case 'Inicio':
                variable = '/pages/index/index.html';
                break;
            case 'Usuarios':
                variable = '/pages/usuarios/indexUsuarios.html';
                break;
            case 'Proyectos':
                variable = '/pages/proyectos/indexProyectos.html';
                break;
            case 'Tareas':
                variable = '/pages/tareas/indexTareas.html';
                break;
            case 'Mensajes':
                variable = '/pages/mensajes/mensajes.html';
                break;
            case 'Mis Contactos':
                variable = '/pages/usuarios/misContactos.html';
                break;
            case 'Todos los Usuarios':
                variable = '/pages/usuarios/ListadoDeUsuarios.html';
                break;
            case 'Crear Nuevos Usuarios':
                variable = '/pages/usuarios/altaUsuarios.html';
                break;
            case 'Mis Proyectos':
                variable = '/pages/proyectos/misProyectos.html';
                break;
            case 'Todos los proyectos':
                variable = '/pages/proyectos/';
                break;
            case 'Crear Nuevos Proyectos':
                variable = '/pages/proyectos/';
                break;
            case 'Mis Tareas':
                variable = '/pages/tareas/misTareas.html';
                break;
            case 'Todas las Tareas':
                variable = '/pages/tareas/';
                break;
            case 'Crear Nueva Tarea':
                variable = '/pages/tareas/';
                break;

            }
            WinJS.Navigation.navigate(variable, WinJS.Navigation.state);

        },


        setupNavBarContainer: function() {
            var navBarContainerEl = document.body.querySelector('#NavBar .NavBarContainer');

            navBarContainerEl.addEventListener("splittoggle", function(e) {
                    var flyout; // = document.getElementById("usuarioFlyout").winControl;

                    if (e.detail.index == 1) {
                        flyout = document.getElementById("usuarioFlyout").winControl;
                    } else if (e.detail.index == 2) {
                        flyout = document.getElementById("proyectoFlyout").winControl;
                    } else {
                        flyout = document.getElementById("tareaFlyout").winControl;
                    }
                    var navbarCommand = e.detail.navbarCommand;
                    if (e.detail.opened) {
                        flyout.show(navbarCommand.element);
                        var subNavBarContainer = flyout.element.querySelector('.win-navbarcontainer');
                        if (subNavBarContainer) {
                            // Switching the navbarcontainer from display none to display block requires forceLayout in case there was a pending measure.
                            subNavBarContainer.winControl.forceLayout();
                            // Reset back to the first item:
                            subNavBarContainer.currentIndex = 0;
                        }
                        flyout.addEventListener('beforehide', go);
                    } else {
                        flyout.removeEventListener('beforehide', go);
                        flyout.hide();
                    }

                    function go() {
                        flyout.removeEventListener('beforehide', go);
                        navbarCommand.splitOpened = false;
                    }
                }
            );
            document.getElementById("NavBar").winControl.showOnlyCommands([]);
            document.getElementById("altaNuevo").addEventListener('click', function () { WinJS.Navigation.navigate("/pages/usuarios/altaUsuarios.html", WinJS.Navigation.state) });

        }
        
       
        
});
})();
