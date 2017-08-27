import './menu.scss';

class MenuController {

    constructor() {
        this.classes = '';
    }

    $onChanges() {
        this.classes = this.getClass();
    }

    getClass() {
        let classes = ['menu'];
        let types = {
            horizontal: 'menu--horizontal',
            vertical: 'menu--vertical'
        };

        if (this.type) {
            classes.push(types[this.type]);
        } else {
            classes.push(types.vertical);
        }

        return classes.join(' ');
    }
}

export default {
    bindings: {
        items: '<',
        type: '@'
    },
    controller: MenuController,
    controllerAs: 'menu',
    template: require('./menu.html')
};
