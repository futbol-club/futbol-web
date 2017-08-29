import english from 'bootstrap/locale/english';
import spanish from 'bootstrap/locale/spanish';

locale.$inject = ['$translateProvider'];

export default function locale($translateProvider) {
    $translateProvider.translations('en', english);
    $translateProvider.translations('es', spanish);

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
}
