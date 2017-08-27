import './overlay-portal.scss';

class OverlayPortalController {

    constructor($scope, headerControl) {
        this.classes = this.getClass();
        this.headerControl = headerControl;

        $scope.$on(
            'header-control:sidebar-toggle',
            (event, sidebarShown) => {
                this.classes = this.getClass(sidebarShown);
            }
        );
    }

    getClass(sidebarShown) {
        let classes = ['overlay-portal'];
        let toggleIndex = classes.indexOf('overlay-portal--active');

        if (sidebarShown) {
            classes.push('overlay-portal--active');
        } else if (toggleIndex !== -1) {
            classes.splice(toggleIndex, 1);
        }

        return classes.join(' ');
    }

    toggleOverlay() {
        this.headerControl.toggleSidebar();
    }
}

export default {
    bindings: {},
    controller: OverlayPortalController,
    controllerAs: 'overlayPortal',
    template: require('./overlay-portal.html'),
    transclude: true
};
