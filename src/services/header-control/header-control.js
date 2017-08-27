class HeaderControlService {

    constructor($rootScope) {
        this.rootScope = $rootScope;
        this.sidebarShown = false;
    }

    toggleSidebar(sidebarShown) {
        if (typeof sidebarShown !== 'undefined') {
            this.sidebarShown = sidebarShown;
        } else {
            this.sidebarShown = !this.sidebarShown;
        }

        this.broadcastToggle();
    }

    broadcastToggle() {
        this.rootScope.bodyStyle = (this.sidebarShown) ? 'body--overlay' : null;
        this.rootScope.$broadcast('header-control:sidebar-toggle', this.sidebarShown);
    }
}

export default HeaderControlService;
