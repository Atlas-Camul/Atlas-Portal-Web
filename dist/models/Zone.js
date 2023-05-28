"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zone = void 0;
class Zone {
    constructor(id, name, type, latitude, longitude, restriction) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.latitude = latitude;
        this.longitude = longitude;
        this.restriction = restriction;
    }
}
exports.Zone = Zone;
