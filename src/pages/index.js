import angular from 'angular';

import home from 'pages/home/home';

export default angular
    .module('app.pages', [])
    .component('home', home)
    .name;
