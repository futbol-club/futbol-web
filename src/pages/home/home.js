class HomeController {

    constructor() {
        this.text = 'Fútbol Web';
    }
}

export default {
    bindings: {},
    controller: HomeController,
    controllerAs: 'home',
    template: require('./home.html')
};
