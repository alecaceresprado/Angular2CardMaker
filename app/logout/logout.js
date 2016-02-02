(function(logout) {
  app.logout =
    ng.core.Component({
      selector: 'page-content',
      templateUrl: 'app/logout/logout.html',
    })
    .Class({
      constructor: function() {
        document.title = "Cerrar sesion";
      },
     goTo: function(){
        ng.platform.browser.bootstrap(app.main);
      }
    });
})(window.logout || (window.logout = {}));