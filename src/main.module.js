import './main.scss';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from 'main.config';

import components from 'components';
import pages from 'pages';
import services from 'services';

angular
    .module('app', [
        components,
        pages,
        services,
        uirouter
    ])
    .config(routing);
