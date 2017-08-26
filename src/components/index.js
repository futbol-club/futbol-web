import fcButton from 'components/fc-button/fc-button';
import icon from 'components/icon/icon';
import header from 'components/header/header';

export default angular
    .module('app.components', [])
    .component('fcButton', fcButton)
    .component('icon', icon)
    .component('header', header)
    .name;
