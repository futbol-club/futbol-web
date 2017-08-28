import moment from 'moment';
import './futbol-card.scss';

class FutbolCardController {

    constructor(futbolLocationData) {
        this.date = '';
        this.image = '';
        this.location = '';

        this.futbolLocationData = futbolLocationData;
    }

    $onChanges() {
        let data = this.data;
        let location = this.data.location;

        this.date = moment(data.date, 'YYYY-MM-DD').format('DD/MM');
        this.image = this.futbolLocationData.getImage(location);
        this.location = this.futbolLocationData.getFullName(location);
    }
}

export default {
    bindings: {
        data: '<'
    },
    controller: FutbolCardController,
    controllerAs: 'futbolCard',
    template: require('./futbol-card.html')
};
