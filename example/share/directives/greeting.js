export function greeting() {
    return {
        restrict: 'AE',
        template: '<div>{{$ctrl.greet}}</div>',
        controller: 'myController',
        controllerAs: '$ctrl',
        bindToController: true,
        scope: {}
    }
}

greeting.$inject = [];
