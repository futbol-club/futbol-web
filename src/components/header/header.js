import './header.scss';

class HeaderController {

    constructor(headerControl, $translate) {
        this.actionList = [
            {
                onClick: () => {
                    // TODO: @Temporary. The language control capabilities
                    // will be hosted in user profile and configuration page.
                    this.language = (this.language === 'en') ? 'es' : 'en';

                    $translate.use(this.language);
                },
                text: 'BUTTON__CURRENT_LANGUAGE'
            },
            {
                iconName: 'bell'
            },
            {
                iconName: 'search'
            }
        ];
        this.language = 'en';
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

    changeLanguage() {



    }
}

export default {
    bindings: {},
    controller: HeaderController,
    controllerAs: 'header',
    template: require('./header.html')
};
