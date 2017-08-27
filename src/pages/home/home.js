class HomeController {

    constructor(headerControl) {
        headerControl.toggleSidebar(false);
    }
}

export default {
    bindings: {},
    controller: HomeController,
    controllerAs: 'home',
    template: require('./home.html')
};
