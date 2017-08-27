import './header.scss';

class HeaderController {

    constructor(headerControl) {
        this.actionList = [
            {
                iconName: 'bell'
            },
            {
                iconName: 'search'
            }
        ];
        this.headerControl = headerControl;
        this.pageTitle = 'Fútbol Club';
    }

    isUserLoggedIn() {
        // TODO: replace with service from login.
        return true;
    }

    toggleMenu() {
        this.headerControl.toggleSidebar();
    }
}

export default {
    bindings: {},
    controller: HeaderController,
    controllerAs: 'header',
    template: require('./header.html')
};
