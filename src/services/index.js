import angular from 'angular';

import futbolLocationData from 'services/futbol-location-data/futbol-location-data';
import headerControl from 'services/header-control/header-control';

export default angular
    .module('app.services', [])
    .service('futbolLocationData', futbolLocationData)
    .service('headerControl', headerControl)
    .name;
