import './profile-info.scss';

class ProfileInfoController {

    constructor() {
        // TODO: use service
        this.name = 'elnawe';
        this.avatar = 'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/18198364_1892493937668382_6724867864038748826_n.jpg?oh=dd08e1a27997a581522a1676c8dbda69&oe=5A24CB61';
    }
}

export default {
    bindings: {},
    controller: ProfileInfoController,
    controllerAs: 'profileInfo',
    template: require('./profile-info.html')
};
