import card from 'components/card/card';
import cardImage from 'components/card-image/card-image';
import fcButton from 'components/fc-button/fc-button';
import fcInput from 'components/fc-input/fc-input';
import flyout from 'components/flyout/flyout';
import futbolCard from 'components/futbol-card/futbol-card';
import icon from 'components/icon/icon';
import header from 'components/header/header';
import menu from 'components/menu/menu';
import overlayPortal from 'components/overlay-portal/overlay-portal';
import profileInfo from 'components/profile-info/profile-info';
import sidebar from 'components/sidebar/sidebar';

export default angular
    .module('app.components', [])
    .component('card', card)
    .component('cardImage', cardImage)
    .component('fcButton', fcButton)
    .component('fcInput', fcInput)
    .component('flyout', flyout)
    .component('futbolCard', futbolCard)
    .component('icon', icon)
    .component('header', header)
    .component('menu', menu)
    .component('overlayPortal', overlayPortal)
    .component('profileInfo', profileInfo)
    .component('sidebar', sidebar)
    .name;
