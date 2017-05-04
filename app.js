angular.module('drinkSmart', ['angularUtils.directives.dirPagination'])
    .controller('mainController', mainController);

function mainController() {
    var vm = this;
    vm.states = {
        home: 'home',
        spec: 'specialist'
    };
    vm.state = vm.states.home;
}
