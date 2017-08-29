import './main.scss';

import angular from 'angular';
import translate from 'angular-translate';
import uirouter from '@uirouter/angularjs';

import locale from 'main.locale';
import routing from 'main.config';

import components from 'components';
import pages from 'pages';
import services from 'services';

angular
    .module('app', [
        components,
        pages,
        services,
        translate,
        uirouter
    ])
    .config(locale)
    .config(routing);
