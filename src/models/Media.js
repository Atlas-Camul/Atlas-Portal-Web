export class Media {
    id: number;
    url: string;
    type: string;

    constructor(id: number, url: string, type: string){
        this.id = id;
        this.url = url;
        this.type = type;
    }
}