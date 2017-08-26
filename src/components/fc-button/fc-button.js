import './fc-button.scss';

class FCButtonController {

    constructor() {
        this.classes = '';
        this.showIcon = (this.iconName !== '');
    }

    $onChanges() {
        this.classes = this.getClass();
    }

    getClass() {
        let classes = ['fc-button'];
        let types = {
            flat: 'fc-button--flat',
            floating: 'fc-button--floating',
            raised: 'fc-button--raised'
        };

        if (this.type) {
            classes.push(types[this.type]);
        }

        if (this.active) {
            classes.push('fc-button--active');
        }

        return classes.join(' ');
    }

    onButtonClick() {
        this.onClick();
    }
}

export default {
    bindings: {
        active: '@',
        iconName: '@',
        onClick: '&',
        text: '@',
        type: '@'
    },
    controller: FCButtonController,
    controllerAs: 'fcButton',
    template: require('./fc-button.html'),
    transclude: true
};
