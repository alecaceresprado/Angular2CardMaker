(function(main) {
  app.main =
    ng.core.Component({
      selector: 'page-content',
      templateUrl: 'app/main/main.html',
    })
    .Class({
      constructor: function() {
        this.mainPage = "Main Page";
        document.title = "Los Ceibos";
      },
      dummyClicker: function(){
        if(this.mainPage === "congrats!")
          this.mainPage = "Main Page";
        else
          this.mainPage = "congrats!";
      },
      goTo: function(){
        ng.platform.browser.bootstrap(app.logout);
      }
    });
})(window.main || (window.main = {}));