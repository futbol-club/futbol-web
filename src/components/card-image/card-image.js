import './card-image.scss';

class CardImageController {

    constructor() {}
}

export default {
    bindings: {
        src: '<'
    },
    controller: CardImageController,
    controllerAs: 'cardImage',
    template: require('./card-image.html')
};
