import template from './app.component.html';

class controller {
    constructor (colorService) {
        this.colorService = colorService;
    }

    $onInit() {
        let color = this.colorService.getColor();
        angular.element('body').css('color', color);
    }
}

controller.$inject = ['colorService'];

export const appComponent = {
    selector: 'app', //组件名
    template,
    controller,
    bindings: {}
}