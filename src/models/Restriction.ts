class Restriction {
    id: number;
    name: string;
    type: string;
    latitude: string;
    longitude: string;

    constructor(id: number, name: string, type: string, latitude: string, longitude: string){
        this.id = id;
        this.name = name;
        this.type = type;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}

export { Restriction };
