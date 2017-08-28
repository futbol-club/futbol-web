class FutbolLocationData {

    constructor() {
        this.locations = {
            PIC: {
                address: 'Brown 3135',
                fullName: 'Pichincha Multiespacio Deportivo',
                image: 'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/11102681_852729814792522_2742999012227871263_n.jpg?oh=0e282997ac245617f27f047bdbfa83d2&oe=5A1984F0',
                phoneNumber: '03413863000'
            }
        };
    }

    getFullName(id) {
        return this.locations[id].fullName;
    }

    getImage(id) {
        return this.locations[id].image;
    }
}

export default FutbolLocationData;
