import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './main.config';

import home from './pages/home';

angular.module('app', [uirouter, home])
    .config(routing);
