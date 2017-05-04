angular
    .module('drinkSmart')
    .directive('home', home);

homeDirective.$inject = ['core'];

function homeDirective(core) {
    var vm = this;

    vm.find = find;
    vm.clear = clear;

    vm.submited = false;
    vm.result = {};
    vm.answers = {};

    function find() {
        vm.result = core.findBestCase(vm.answers);
        vm.submited = true;
    }

    function clear() {
        vm.result = {};
        vm.answers = {};
        vm.submited = false;
    }
}

function home() {
    return {
        restrict: 'E',
        templateUrl: 'home/home.html',
        controller: homeDirective,
        controllerAs: 'vm'
    };
}