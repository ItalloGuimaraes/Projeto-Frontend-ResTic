angular.module("BurguerManiaApp").component("menuPage", {
    templateUrl: "app/pages/menu/menu.component.html",
    controller: function () {
      this.items = [
        {
          id: 1,
          title: "X-Vegan",
          description: "Hambúrguer vegano com pão integral.",
          price: "R$ 25,90",
          image: "assets/x-vegan.jpg",
        },
        {
          id: 2,
          title: "X-Fitness",
          description: "Opção leve com pão sem glúten.",
          price: "R$ 27,90",
          image: "assets/x-fitness.jpg",
        },
        {
          id: 3,
          title: "X-Tradicional",
          description: "O clássico sabor artesanal.",
          price: "R$ 23,90",
          image: "assets/x-tradicional.jpg",
        },
      ];
    },
  });
  