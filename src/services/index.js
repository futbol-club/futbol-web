import angular from 'angular';

import headerControl from 'services/header-control/header-control';

export default angular
    .module('app.services', [])
    .service('headerControl', headerControl)
    .name;
