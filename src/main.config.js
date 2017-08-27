routing.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            component: 'home',
            url: '/'
        })
        .state('profile', {
            component: 'home',
            url: '/profile'
        });
}
