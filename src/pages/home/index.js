import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import HomeController from './home.controller';
import homeRoutes from './home.routes';

export default angular.module('app.home', [uirouter])
    .config(homeRoutes)
    .controller('HomeController', HomeController)
    .name;
