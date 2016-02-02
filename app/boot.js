(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    this.title = "Los Ceibos";
    ng.platform.browser.bootstrap(app.header);
    ng.platform.browser.bootstrap(app.insertEmployee);
    ng.platform.browser.bootstrap(app.footer);
  });
})(window.app || (window.app = {}));
