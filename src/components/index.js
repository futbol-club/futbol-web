import fcButton from 'components/fc-button/fc-button';
import icon from 'components/icon/icon';
import header from 'components/header/header';
import sidebar from 'components/sidebar/sidebar';

export default angular
    .module('app.components', [])
    .component('fcButton', fcButton)
    .component('icon', icon)
    .component('header', header)
    .component('sidebar', sidebar)
    .name;
