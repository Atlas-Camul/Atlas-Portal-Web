export class Beacon {
    id: number;
    name: string;
    latitude: string;
    longitude: string;

    constructor(id:number, name: string, latitude: string, longitude: string){
        this.id = id;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}