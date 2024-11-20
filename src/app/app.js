angular
  .module("BurguerManiaApp", ["ngRoute"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        template: "<home-page></home-page>",
      })
      .when("/menu", {
        template: "<menu-page></menu-page>",
      })
      .when("/product/:category", {
        template: "<product-details></product-details>",
      })
      .when("/order", {
        template: "<order-page></order-page>",
      })
      .otherwise({
        redirectTo: "/",
      });
  });


