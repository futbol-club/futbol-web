import './fc-input.scss';

class FCInputController {

    constructor() {

    }
}

export default {
    bindings: {
        label: '@',
        value: '<'
    },
    controller: FCInputController,
    controllerAs: 'fcInput',
    template: require('./fc-input.html')
};
