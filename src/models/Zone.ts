class Zone {
    id: number;
    name: string;
    type: string;
    latitude: string;
    longitude: string;
    restriction: number;

    constructor(id: number, name: string, type: string, latitude: string, longitude: string, restriction: number){
        this.id = id;
        this.name = name;
        this.type = type;
        this.latitude = latitude;
        this.longitude = longitude;
        this.restriction = restriction;
    }
}

export { Zone };