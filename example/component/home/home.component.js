import template from './home.component.html';

class controller {
    constructor(greetService, apiPath) {
        this.greetService = greetService;
        this.apiPath = apiPath;
    }

    $onInit() {
        this.title = this.greetService.getText();
        this.url = this.apiPath;
    }
}

controller.$inject = ['greetService', 'apiPath'];

export const homeComponent = {
    selector: 'home',
    template,
    controller,
    bindings: {}
};