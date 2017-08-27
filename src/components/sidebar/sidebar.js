import './sidebar.scss';

class SidebarController {

    constructor($scope, headerControl) {
        this.classes = '';
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

        $scope.$watch(
            () => headerControl.sidebarShown,
            (sidebarShown) => {
                this.classes = this.getClass(sidebarShown);
            }
        );
    }

    getClass(sidebarShown) {
        let classes = ['sidebar'];
        let toggleIndex = classes.indexOf('sidebar--show');

        if (sidebarShown) {
            classes.push('sidebar--shown');
        } else if (toggleIndex !== -1) {
            classes.splice(toggleIndex, 1);
        }

        return classes.join(' ');
    }
}

export default {
    bindings: {},
    controller: SidebarController,
    controllerAs: 'sidebar',
    template: require('./sidebar.html')
};
