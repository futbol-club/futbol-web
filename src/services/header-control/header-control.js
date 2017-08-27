class HeaderControlService {

    constructor() {
        this.sidebarShown = false;
    }

    toggleSidebar() {
        this.sidebarShown = !this.sidebarShown;
    }
}

export default HeaderControlService;
