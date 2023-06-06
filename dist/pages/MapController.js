"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_azure_maps_1 = require("react-azure-maps");
const azure_maps_control_1 = require("azure-maps-control");
const controls = [
    {
        controlName: "StyleControl",
        controlOptions: {
            mapStyles: [
                "road",
                "grayscale_light",
                "grayscale_dark",
                "night",
                "satellite",
            ],
        },
        options: { position: "top-right" },
    },
    {
        controlName: "ZoomControl",
        options: { position: "top-right" },
    },
    {
        controlName: "CompassControl",
        controlOptions: { rotationDegreesDelta: 10, style: "dark" },
        options: { position: "bottom-right" },
    },
    {
        controlName: "PitchControl",
        controlOptions: { pitchDegreesDelta: 5, style: "dark" },
        options: { position: "bottom-right" },
    },
    {
        controlName: "TrafficControl",
        controlOptions: { incidents: true },
        options: { position: "top-left" },
    },
    {
        controlName: "TrafficLegendControl",
        controlOptions: {},
        options: { position: "bottom-left" },
    },
];
const getPointAtMap = (jsonData) => {
    const element = [];
    jsonData.map((item, index) => {
        const res = item;
        const point = new azure_maps_control_1.data.Point([Number(res.latitude), Number(res.longitude)]);
        const feature = new azure_maps_control_1.data.Feature(point, { name: res.name });
        element.push(feature);
    });
    return element;
};
function clusterClicked(e) {
    console.log("clusterClicked", e);
}
const onClick = (e) => {
    console.log("You click on: ", e);
};
// function azureHtmlMapMarkerOptions(
//   coordinates: data.Position
// ): HtmlMarkerOptions {
//   return {
//     position: coordinates,
//     text: "My text",
//     title: "Title",
//   };
// }
const memoizedOptions = {
    textOptions: {
        textField: ["get", "title"],
        offset: [0, 1.2],
    },
    iconOptions: { image: `pin-round-red` },
};
const memoizedOptionsD = {
    textOptions: {
        textField: ["get", "title"],
        offset: [0, 1.2],
    },
    iconOptions: { image: `pin-round-darkblue` },
};
const eventToMarker = [
    { eventName: "click", callback: onClick },
];
const renderPoint = (coordinates, title) => {
    const rendId = Math.random();
    return (react_1.default.createElement(react_azure_maps_1.AzureMapFeature, { key: rendId, id: rendId.toString(), type: "Point", coordinate: coordinates.coordinates, properties: {
            title: title,
            // icon: markersStandardImages[
            //   Math.floor(Math.random() * markersStandardImages.length)
            // ],
        } }));
};
// function renderHTMLPoint(coordinates: data.Position): any {
//   const rendId = Math.random();
//   return (
//     <AzureMapHtmlMarker
//       key={rendId}
//       markerContent={<div className="pulseIcon"></div>}
//       options={{ ...azureHtmlMapMarkerOptions(coordinates) } as any}
//       events={eventToMarker}
//     />
//   );
// }
const colorValue = () => "#000000".replace(/0/g, function () {
    return (~~(Math.random() * 16)).toString(16);
});
const markersStandardImages = [
    `marker-black`,
    `marker-blue`,
    `marker-darkblue`,
    `marker-red`,
    `marker-yellow`,
    `pin-blue`,
    `pin-darkblue`,
    `pin-red`,
    `pin-round-blue`,
    `pin-round-darkblue`,
    `pin-round-red`,
];
const rand = () => markersStandardImages[Math.floor(Math.random() * markersStandardImages.length)];
function MarkersExample() {
    const [beaconData, setBeaconData] = (0, react_1.useState)([]);
    const [zoneData, setZoneData] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('/map');
                const data = yield response.json();
                if ('status' in data) {
                    return;
                }
                const { zones, beacons } = data;
                //Set beaconData
                if (Array.isArray(beacons)) {
                    setBeaconData(beacons);
                }
                else {
                    setBeaconData([beacons]);
                }
                //Set zoneData
                if (Array.isArray(zones)) {
                    setZoneData(zones);
                }
                else {
                    setZoneData([zones]);
                }
            }
            catch (error) {
                console.log(error);
            }
        });
        fetchData();
    }, []);
    var markers = getPointAtMap(beaconData);
    var dmarkers = getPointAtMap(zoneData);
    const [markersDLayer] = (0, react_1.useState)("SymbolLayer");
    const [layerOptionsD, setLayerOptionsD] = (0, react_1.useState)(memoizedOptionsD);
    const [markersLayer] = (0, react_1.useState)("SymbolLayer");
    const [layerOptions, setLayerOptions] = (0, react_1.useState)(memoizedOptions);
    const option = (0, react_1.useMemo)(() => {
        return {
            authOptions: {
                authType: azure_maps_control_1.AuthenticationType.subscriptionKey,
                subscriptionKey: "5hsgO4geR7ounvuJTs9ZZJ_jdsPBp7AOpmyoMP6kg3A",
            },
            center: [-8.608016921839297, 41.17841760693419],
            zoom: 17,
            view: "Auto",
        };
    }, []);
    // const addRandomMarker = () => {
    //   const randomLongitude = Math.floor(Math.random() * (-80 - -120) + -120);
    //   const randomLatitude = Math.floor(Math.random() * (30 - 65) + 65);
    //   const newPoint = new data.Position(randomLongitude, randomLatitude);
    //   setMarkers([...markers, newPoint]);
    // };
    // const addRandomHTMLMarker = () => {
    //   const randomLongitude = Math.floor(Math.random() * (-80 - -120) + -120);
    //   const randomLatitude = Math.floor(Math.random() * (30 - 65) + 65);
    //   const newPoint = new data.Position(randomLongitude, randomLatitude);
    //   setHtmlMarkers([...htmlMarkers, newPoint]);
    // };
    // const removeAllMarkers = () => {
    //   setMarkers([]);
    //   setHtmlMarkers([]);
    // };
    const memoizedMarkerRender = (0, react_1.useMemo)(() => markers.map((marker) => renderPoint(marker.geometry, (marker.properties != undefined) ? marker.properties.name : '')), [markers]);
    const memoizedDMarkerRender = (0, react_1.useMemo)(() => dmarkers.map((marker) => renderPoint(marker.geometry, (marker.properties != undefined) ? marker.properties.name : '')), [dmarkers]);
    // const memoizedHtmlMarkerRender: IAzureDataSourceChildren = useMemo(
    //   (): any => htmlMarkers.map((marker) => renderHTMLPoint(marker)),
    //   [htmlMarkers]
    // );
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: styles.buttonContainer },
            react_1.default.createElement("div", { className: "inline-flex rounded-full bg-danger bg-opacity-10 px-3 py-1 text-sm font-medium text-danger" },
                "Beacons on ISEP: ",
                markers.length),
            react_1.default.createElement("div", { className: "inline-flex rounded-full bg-[#0065af] bg-opacity-10 px-3 py-1 text-sm font-medium text-[#003963] dark:text-[#007bd5]" },
                "Zones on ISEP: ",
                dmarkers.length)),
        react_1.default.createElement(react_azure_maps_1.AzureMapsProvider, null,
            react_1.default.createElement("div", { style: styles.map },
                react_1.default.createElement(react_azure_maps_1.AzureMap, { options: option, controls: controls },
                    react_1.default.createElement(react_azure_maps_1.AzureMapDataSourceProvider, { events: {
                            dataadded: (e) => {
                                console.log("Data on source added", e);
                            },
                        }, id: "markersExample AzureMapDataSourceProvider" },
                        react_1.default.createElement(react_azure_maps_1.AzureMapLayerProvider, { id: "markersExample AzureMapLayerProvider", options: layerOptions, events: {
                                click: clusterClicked,
                                dbclick: clusterClicked,
                            }, lifecycleEvents: {
                                layeradded: () => {
                                    console.log("LAYER ADDED TO MAP");
                                },
                            }, type: markersLayer }),
                        memoizedMarkerRender),
                    react_1.default.createElement(react_azure_maps_1.AzureMapDataSourceProvider, { events: {
                            dataadded: (e) => {
                                console.log("Data on source added", e);
                            },
                        }, id: "markersExample AzureMapDataSourceProvider2" },
                        react_1.default.createElement(react_azure_maps_1.AzureMapLayerProvider, { id: "markersExample AzureMapLayerProvider2", options: layerOptionsD, events: {
                                click: clusterClicked,
                                dbclick: clusterClicked,
                            }, lifecycleEvents: {
                                layeradded: () => {
                                    console.log("LAYER ADDED TO MAP");
                                },
                            }, type: markersDLayer }),
                        memoizedDMarkerRender))))));
}
const styles = {
    map: {
        height: 700,
    },
    buttonContainer: {
        display: "grid",
        gridAutoFlow: "column",
        gridGap: "10px",
        gridAutoColumns: "max-content",
        padding: "10px 0",
        alignItems: "center",
    },
    button: {
        height: 35,
        width: 80,
        color: "#9a1a24",
        "text-align": "center",
    },
};
exports.default = (0, react_1.memo)(MarkersExample);
