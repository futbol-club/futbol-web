import card from 'components/card/card';
import fcButton from 'components/fc-button/fc-button';
import flyout from 'components/flyout/flyout';
import icon from 'components/icon/icon';
import header from 'components/header/header';
import menu from 'components/menu/menu';
import overlayPortal from 'components/overlay-portal/overlay-portal';
import profileInfo from 'components/profile-info/profile-info';
import sidebar from 'components/sidebar/sidebar';

export default angular
    .module('app.components', [])
    .component('card', card)
    .component('fcButton', fcButton)
    .component('flyout', flyout)
    .component('icon', icon)
    .component('header', header)
    .component('menu', menu)
    .component('overlayPortal', overlayPortal)
    .component('profileInfo', profileInfo)
    .component('sidebar', sidebar)
    .name;
