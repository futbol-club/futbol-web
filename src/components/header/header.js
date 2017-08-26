import './header.scss';

class HeaderController {

    constructor() {
        this.pageTitle = 'Fútbol Club';
    }

    isUserLoggedIn() {
        // TODO: replace with service from login.
        return true;
    }
}

export default {
    bindings: {},
    controller: HeaderController,
    controllerAs: 'header',
    template: require('./header.html')
};
