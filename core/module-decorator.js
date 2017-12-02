(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('angular')) :
    typeof define === 'function' && define.amd ? define(['exports', 'angular'], factory) :
    (factory((global['decorator'] = {}),global.angular));
}(this, (function(exports, ng_form_import) {
    var ng_from_global = angular;
    var ng = (ng_form_import && ng_form_import.module) ? ng_form_import : ng_from_global;

    const BLANK_MODULE = {
        name:         '',
        imports:      [],
        configBlocks: [],
        runBlocks:    [],
        states:       [],
        components:   {},
        directives:   {},
        controllers:  {},
        filters:      {},
        providers:    {},
        services:     {},
        constants:    {},
        decorators:   {}
    };

    function NgModule(value) {
        return target => {
            return class extends target {
                constructor() {
                    super();
                    if (!value.name) throw new Error('expect module to have name');
                    let module = Object.assign({}, BLANK_MODULE, value);
                    let ngModule = ng.module(module.name, module.imports);
                    this.name = module.name;
                    ngModule.config(['$stateProvider', $stateProvider => module.states.forEach(state => $stateProvider.state(state))]);
                    Object.keys(module.components).forEach(name => ngModule.component(module.components[name].selector ? module.components[name].selector : name, module.components[name]));
                    Object.keys(module.directives).forEach(name => ngModule.directive(name, module.directives[name]));
                    Object.keys(module.controllers).forEach(name => ngModule.controller(name, module.controllers[name]));
                    Object.keys(module.filters).forEach(name => ngModule.filter(name, module.filters[name]));
                    Object.keys(module.providers).forEach(name => ngModule.provider(name, module.providers[name]));
                    Object.keys(module.services).forEach(name => ngModule.service(name, module.services[name]));
                    Object.keys(module.constants).forEach(name => ngModule.constant(name, module.constants[name]));
                    Object.keys(module.decorators).forEach(name => ngModule.decorator(name, module.decorators[name]));
                    module.configBlocks.forEach(configBlock => ngModule.config(configBlock));
                    module.runBlocks.forEach(runBlock => ngModule.run(runBlock));
                }
            };
        }
    }

    exports.NgModule = NgModule;
})));


