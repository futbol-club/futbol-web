import './header.scss';

class HeaderController {

    constructor() {
        this.actionList = [
            {
                iconName: 'bell'
            },
            {
                iconName: 'search'
            }
        ];
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
