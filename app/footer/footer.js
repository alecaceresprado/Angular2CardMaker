(function(footer) {
  app.footer =
    ng.core.Component({
      selector: 'footer',
      templateUrl: 'app/footer/footer.html',
    })
    .Class({
      constructor: function() {}
    });
})(window.footer || (window.footer = {}));