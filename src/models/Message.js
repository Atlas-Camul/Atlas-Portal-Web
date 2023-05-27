export class Message {
    id: number;
    title: string;
    description: string;
    latitude: string;
    longitude: string;

    constructor(id: number, title: string, description: string, latitude: string, longitude: string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
