import './icon.scss';

class IconController {

    constructor() {
        this.iconAlist = {
            bell: 'ion-ios-bell',
            search: 'ion-ios-search-strong',
            settings: 'ion-ios-settings',
            soccer: 'ion-ios-football'
        };
        this.classes = '';
    }

    $onChanges() {
        this.classes = this.getClass();
    }

    getClass() {
        let classes = ['icon'];

        if (this.name) {
            classes.push(this.iconAlist[this.name]);
        }

        if (this.fromButton) {
            classes.push('icon--button');
        }

        return classes.join(' ');
    }
}

export default {
    bindings: {
        fromButton: '<',
        name: '@'
    },
    controller: IconController,
    controllerAs: 'icon',
    template: require('./icon.html')
};
