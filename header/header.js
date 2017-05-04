angular
    .module('drinkSmart')
    .directive('header', header);

function headerDirective() {
    var vm = this;

    vm.changeState = changeState;

    function changeState(state) {
        vm.state = state;
    }
}

function header() {
    return {
        restrict: 'E',
        templateUrl: 'header/header.html',
        scope: {
            state: '=',
            states: '='
        },
        controller: headerDirective,
        controllerAs: 'vm',
        bindToController: true
    };
}
