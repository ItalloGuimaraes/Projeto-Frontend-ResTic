angular.module("BurguerManiaApp").component("buttonComponent", {
    bindings: {
      label: "@", // Texto do botão
      type: "@",  // Tipo do botão (ex.: "button", "submit")
      onClick: "&", // Função para evento de clique
      customClass: "@", // Classe CSS personalizada
    },
    template: `
      <button 
        class="btn {{ $ctrl.customClass }}" 
        type="{{ $ctrl.type || 'button' }}" 
        ng-click="$ctrl.onClick()">
        {{ $ctrl.label }}
      </button>
    `,
  });
  