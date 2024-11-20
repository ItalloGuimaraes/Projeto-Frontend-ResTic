angular.module('BurguerManiaApp')
  .component('inputComponent', {
    template: `
      <div class="input-form">
        <label for="name">Seu nome:</label>
        <input type="text" id="name" placeholder="Digite seu nome" ng-model="$ctrl.name" />
        <button ng-click="$ctrl.submit()">Enviar</button>
      </div>
    `,
    controller: function() {
      this.name = '';

      this.submit = function() {
        alert('Nome enviado: ' + this.name);
      };
    }
  });