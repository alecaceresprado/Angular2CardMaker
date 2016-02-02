(function(insertEmployee) {
  app.insertEmployee =
    ng.core.Component({
      selector: 'page-content',
      templateUrl: 'app/insertEmployee/insertEmployee.html',
    })
    .Class({
      constructor: function() {
        document.title = "Insertar un empleado";
      }
    });
})(window.insertEmployee || (window.insertEmployee = {}));