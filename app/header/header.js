(function(header) {
  app.header =
    ng.core.Component({
      selector: 'header',
      templateUrl: 'app/header/header.html',
    })
    .Class({
      constructor: function() {}
    });
})(window.header || (window.header = {}));