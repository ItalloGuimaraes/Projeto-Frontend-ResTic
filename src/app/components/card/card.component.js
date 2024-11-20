angular.module("BurguerManiaApp").component("card", {
    bindings: {
      title: "@",
      description: "@",
      price: "@",
      image: "@",
    },
    templateUrl: "app/components/card/card.component.html",
  });
  