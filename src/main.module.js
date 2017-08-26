import './main.scss';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from 'main.config';

import pages from 'pages';
import components from 'components';

angular
    .module('app', [
        components,
        pages,
        uirouter
    ])
    .config(routing);
