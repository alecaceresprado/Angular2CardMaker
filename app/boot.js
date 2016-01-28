(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    this.title = "hi!";
    ng.platform.browser.bootstrap(app.header);
    ng.platform.browser.bootstrap(app.main);
    ng.platform.browser.bootstrap(app.footer);
  });
})(window.app || (window.app = {}));
