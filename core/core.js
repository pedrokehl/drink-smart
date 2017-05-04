angular
    .module('drinkSmart')
    .factory('core', core);

core.$inject = ['weightsConstants', 'casesConstants'];

function core(weights, casesConstants) {
    var MAX_POINTS;

    setMaxPoints();

    var service = {
        cases: casesConstants,
        findBestCase: findBestCase,
        deleteCase: deleteCase,
        insertCase: insertCase
    };
    return service;

    function findBestCase(problem) {
        var bestCase = {};
        var bestPoints = 0;
        service.cases.forEach(function(curCase) {
            var curPoints = calcPoints(problem, curCase);
            if (curPoints > bestPoints) {
                bestPoints = curPoints;
                bestCase.case = curCase;
            }
        });
        bestCase.proximity = ((100 / MAX_POINTS) * bestPoints).toFixed(2);
        return bestCase;
    }

    function deleteCase(caseToDelete) {
        var index = service.cases.indexOf(caseToDelete);
        if(index >= 0) {
            service.cases.splice(index, 1);
        }
    }

    function insertCase(newCase) {
        service.cases.push(newCase);
    }

    // Private methods

    function calcPoints(problem, drinkCase) {
        var isValid = true;
        var points = Object.keys(problem).reduce(function(accum, key) {
            var isEqual = problem[key] == drinkCase[key];
            var isRequired = weights[key] === 'D';
            isValid = isValid && (isEqual || !isRequired);
            return accum + (isEqual && !isRequired ? weights[key] : 0);
        }, 0);

        return isValid ? points : 0;
    }

    function setMaxPoints() {
        MAX_POINTS = 0;
        Object.keys(weights).forEach(function(key) {
            MAX_POINTS += weights[key];
        });
    }

}
