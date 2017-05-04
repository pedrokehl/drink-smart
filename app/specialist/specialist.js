angular
    .module('drinkSmart')
    .directive('specialist', specialist);

specDirective.$inject = ['core', 'fieldsConstants'];

function specDirective(core, fieldsConstants) {
    var vm = this;

    vm.insertCase = insertCase;
    vm.deleteCase = core.deleteCase;

    vm.cases = core.cases;
    vm.fields = fieldsConstants;
    vm.newCase = {};

    function insertCase(caseToInsert) {
        core.insertCase(caseToInsert);
        $('#insertCaseModal').modal('toggle');
    }
}

function specialist() {
    return {
        restrict: 'E',
        templateUrl: 'specialist/specialist.html',
        controller: specDirective,
        controllerAs: 'vm'
    };
}