import './sidebar.scss';

class SidebarController {

    constructor() {
        this.menuItems = [
            {
                href: '/news',
                text: 'News'
            },
            {
                href: '/next',
                text: 'Next matches'
            }
        ];
    }
}

export default {
    bindings: {},
    controller: SidebarController,
    controllerAs: 'sidebar',
    template: require('./sidebar.html')
};
