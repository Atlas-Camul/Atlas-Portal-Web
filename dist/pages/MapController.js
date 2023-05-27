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
const point1 = new azure_maps_control_1.data.Feature(new azure_maps_control_1.data.Point([-8.606777741606898, 41.178510465545905]), {
    name: "Parque Isep",
});
const point2 = new azure_maps_control_1.data.Feature(new azure_maps_control_1.data.Point([-8.609154187555822, 41.178978824368066]), {
    name: "Tuna Academica",
});
const point3 = new azure_maps_control_1.data.Feature(new azure_maps_control_1.data.Point([-8.606005235934571, 41.17948755383627]), {
    name: "ISEP ACADEMY",
});
const point4 = new azure_maps_control_1.data.Feature(new azure_maps_control_1.data.Point([-8.60800082854711, 41.17915244604364]), {
    name: "Building F",
});
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
    return (<react_azure_maps_1.AzureMapFeature key={rendId} id={rendId.toString()} type="Point" coordinate={coordinates.coordinates} properties={{
            title: title,
            // icon: markersStandardImages[
            //   Math.floor(Math.random() * markersStandardImages.length)
            // ],
        }}/>);
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
const MarkersExample = () => {
    const [markers, setMarkers] = (0, react_1.useState)([point1, point2, point3]);
    const [dmarkers, setDMarkers] = (0, react_1.useState)([point4]);
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
    const memoizedMarkerRender = (0, react_1.useMemo)(() => markers.map((marker) => { var _a; return renderPoint(marker.geometry, (_a = marker.properties) === null || _a === void 0 ? void 0 : _a.name); }), [markers]);
    const memoizedDMarkerRender = (0, react_1.useMemo)(() => dmarkers.map((marker) => { var _a; return renderPoint(marker.geometry, (_a = marker.properties) === null || _a === void 0 ? void 0 : _a.name); }), [dmarkers]);
    // const memoizedHtmlMarkerRender: IAzureDataSourceChildren = useMemo(
    //   (): any => htmlMarkers.map((marker) => renderHTMLPoint(marker)),
    //   [htmlMarkers]
    // );
    return (<>
      <div style={styles.buttonContainer}>
        {/* <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={addRandomMarker}
        >
          {" "}
          MARKER POINT
        </Button> */}
        {/* <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={addRandomHTMLMarker}
        >
          {" "}
          HTML MARKER
        </Button> */}
        {/* <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() =>
            setLayerOptions({
              textOptions: {
                color: colorValue(),
                size: 16,
              },
            })
          }
        >
          {" "}
          Text Options
        </Button> */}
        {/* <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() =>
            setLayerOptions({
              iconOptions: {
                image: rand(),
              },
            })
          }
        >
          {" "}
          ICON OPTIONS
        </Button> */}
        {/* <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={removeAllMarkers}
        >
          {" "}
          REMOVE ALL
        </Button> */}
        <div className="inline-flex rounded-full bg-danger bg-opacity-10 px-3 py-1 text-sm font-medium text-danger">
          Active beacons on ISEP: {markers.length}
        </div>
        <div className="inline-flex rounded-full bg-[#0065af] bg-opacity-10 px-3 py-1 text-sm font-medium text-[#003963] dark:text-[#007bd5]">
          Deactivated beacons on ISEP: {dmarkers.length}
        </div>
        {/* <Chip label={`Markers HTML on map: ${htmlMarkers.length}`} /> */}
      </div>
      <react_azure_maps_1.AzureMapsProvider>
        <div style={styles.map}>
          <react_azure_maps_1.AzureMap options={option} controls={controls}>
            <react_azure_maps_1.AzureMapDataSourceProvider events={{
            dataadded: (e) => {
                console.log("Data on source added", e);
            },
        }} id={"markersExample AzureMapDataSourceProvider"}>
              <react_azure_maps_1.AzureMapLayerProvider id={"markersExample AzureMapLayerProvider"} options={layerOptions} events={{
            click: clusterClicked,
            dbclick: clusterClicked,
        }} lifecycleEvents={{
            layeradded: () => {
                console.log("LAYER ADDED TO MAP");
            },
        }} type={markersLayer}/>
              {memoizedMarkerRender}
            </react_azure_maps_1.AzureMapDataSourceProvider>

            <react_azure_maps_1.AzureMapDataSourceProvider events={{
            dataadded: (e) => {
                console.log("Data on source added", e);
            },
        }} id={"markersExample AzureMapDataSourceProvider2"}>
              <react_azure_maps_1.AzureMapLayerProvider id={"markersExample AzureMapLayerProvider2"} options={layerOptionsD} events={{
            click: clusterClicked,
            dbclick: clusterClicked,
        }} lifecycleEvents={{
            layeradded: () => {
                console.log("LAYER ADDED TO MAP");
            },
        }} type={markersDLayer}/>
              {memoizedDMarkerRender}
              {/* {memoizedHtmlMarkerRender} */}
            </react_azure_maps_1.AzureMapDataSourceProvider>
          </react_azure_maps_1.AzureMap>
        </div>
      </react_azure_maps_1.AzureMapsProvider>
    </>);
};
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
