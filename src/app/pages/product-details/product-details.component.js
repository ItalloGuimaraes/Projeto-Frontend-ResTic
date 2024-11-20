angular.module("BurguerManiaApp").component("productDetails", {
    templateUrl: "app/pages/product-details/product-details.component.html",
    controller: function ($routeParams) {
      const products = {
        "x-vegan": {
          title: "X-Vegan",
          description:
            "Hambúrguer 100% vegano, pão integral, alface, tomate e molho especial.",
          price: "R$ 25,90",
          image: "assets/x-vegan.jpg",
        },
        "x-fitness": {
          title: "X-Fitness",
          description:
            "Hambúrguer de frango grelhado, pão sem glúten e vegetais frescos.",
          price: "R$ 27,90",
          image: "assets/x-fitness.jpg",
        },
        "x-tradicional": {
          title: "X-Tradicional",
          description: "O clássico hambúrguer com queijo, alface e tomate.",
          price: "R$ 23,90",
          image: "assets/x-tradicional.jpg",
        },
      };
  
      this.product = products[$routeParams.category];
    },
  });
  