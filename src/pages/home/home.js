class HomeController {

    constructor(headerControl) {
        headerControl.toggleSidebar(false);
        // TODO: Move to service
        this.data = [
            {
                date: '2017-12-25',
                location: 'PIC',
                organizer: 'elnawe'
            },
            {
                date: '2017-08-29',
                location: 'PIC',
                organizer: 'elnawe'
            },
            {
                date: '2017-09-07',
                location: 'PIC',
                organizer: 'elnawe'
            },
            {
                date: '2017-09-14',
                location: 'PIC',
                organizer: 'elnawe'
            }
        ];
    }
}

export default {
    bindings: {},
    controller: HomeController,
    controllerAs: 'home',
    template: require('./home.html')
};
