angular
    .module('drinkSmart')
    .directive('questions', questions);

questionsDirective.$inject = [ 'fieldsConstants'];

function questionsDirective(fieldsConstants) {
    var vm = this;

    vm.fields = fieldsConstants;
    vm.fieldKeys = Object.keys(vm.fields);
}

function questions() {
    return {
        restrict: 'E',
        templateUrl: 'core/directives/questions/questions.html',
        scope: {
            model: '='
        },
        controller: questionsDirective,
        controllerAs: 'vm',
        bindToController: true
    };
}
