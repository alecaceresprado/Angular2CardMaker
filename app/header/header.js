(function(header) {
  app.header =
    ng.core.Component({
      selector: 'header',
      templateUrl: 'app/header/header.html',
    })
    .Class({
      constructor: function() {
      },
      goTo: function(){
        ng.platform.browser.bootstrap(app.main);
      }
    });
})(window.header || (window.header = {}));