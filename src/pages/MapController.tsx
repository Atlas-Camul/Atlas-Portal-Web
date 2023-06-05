import React, { memo, useMemo, useState, useEffect } from "react";
import { Beacon } from '../entities/Beacon';
import { Zone } from '../entities/Zone';
import {
    AzureMap,
    AzureMapDataSourceProvider,
    AzureMapFeature,
    AzureMapHtmlMarker,
    AzureMapLayerProvider,
    AzureMapsProvider,
    IAzureDataSourceChildren,
    IAzureMapFeature,
    IAzureMapHtmlMarkerEvent,
    IAzureMapLayerType,
    IAzureMapOptions,
    IAzureMapControls,
    ControlOptions
} from "react-azure-maps";
import {
    AuthenticationType,
    data,
    HtmlMarkerOptions,
    SymbolLayerOptions,
} from "azure-maps-control";

interface IResponse {
    name: string,
    latitude: string,
    longitude: string,
}


const controls: IAzureMapControls[] = [
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
        options: { position: "top-right" } as ControlOptions,
    },
    {
        controlName: "ZoomControl",
        options: { position: "top-right" } as ControlOptions,
    },
    {
        controlName: "CompassControl",
        controlOptions: { rotationDegreesDelta: 10, style: "dark" },
        options: { position: "bottom-right" } as ControlOptions,
    },
    {
        controlName: "PitchControl",
        controlOptions: { pitchDegreesDelta: 5, style: "dark" },
        options: { position: "bottom-right" } as ControlOptions,
    },
    {
        controlName: "TrafficControl",
        controlOptions: { incidents: true },
        options: { position: "top-left" } as ControlOptions,
    },
    {
        controlName: "TrafficLegendControl",
        controlOptions: {},
        options: { position: "bottom-left" } as ControlOptions,
    },
];

const getPointAtMap = (jsonData: object[]) => {
    const element: data.Feature<data.Point, { name: string; }>[] = [];
    jsonData.map((item, index) => {
        const res = item as IResponse;

        const point = new data.Point([Number(res.latitude), Number(res.longitude)]);

        const feature = new data.Feature(
            point, { name: res.name }
        )

        element.push(feature);
    });
    return element;
}

//const point1 = new data.Feature(
//  new data.Point([-8.606777741606898, 41.178510465545905]),
//  {
//    name: "Parque Isep",
//  }
//);
//const point2 = new data.Feature(
//  new data.Point([-8.609154187555822, 41.178978824368066]),
//  {
//    name: "Tuna Academica",
//  }
//);
//const point3 = new data.Feature(
//  new data.Point([-8.606005235934571, 41.17948755383627]),
//  {
//    name: "ISEP ACADEMY",
//  }
//);

//const point4 = new data.Feature(
//    new data.Point([-8.60800082854711, 41.17915244604364]),
//    {
//        name: "Building F",
//    }
//);

function clusterClicked(e: any) {
    console.log("clusterClicked", e);
}

const onClick = (e: any) => {
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

const memoizedOptions: SymbolLayerOptions = {
    textOptions: {
        textField: ["get", "title"], //Specify the property name that contains the text you want to appear with the symbol.
        offset: [0, 1.2],
    },
    iconOptions: { image: `pin-round-red` },
};

const memoizedOptionsD: SymbolLayerOptions = {
    textOptions: {
        textField: ["get", "title"], //Specify the property name that contains the text you want to appear with the symbol.
        offset: [0, 1.2],
    },
    iconOptions: { image: `pin-round-darkblue` },
};

const eventToMarker: Array<IAzureMapHtmlMarkerEvent> = [
    { eventName: "click", callback: onClick },
];

const renderPoint = (
    coordinates: data.Point,
    title: string
): IAzureMapFeature => {
    const rendId = Math.random();

    return (
        <AzureMapFeature
            key={rendId}
            id={rendId.toString()}
            type="Point"
            coordinate={coordinates.coordinates}
            properties={{
                title: title,
                // icon: markersStandardImages[
                //   Math.floor(Math.random() * markersStandardImages.length)
                // ],
            }}
        />
    );
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

const colorValue = () =>
    "#000000".replace(/0/g, function () {
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

const rand = () =>
    markersStandardImages[
    Math.floor(Math.random() * markersStandardImages.length)
    ];

function MarkersExample() {
    const [beaconData, setBeaconData] = useState<object[]>([]);
    const [zoneData, setZoneData] = useState<object[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/map');
                const data = await response.json();

                if ('status' in data) {
                    return;
                }

                const { zones, beacons } = data;

                //Set beaconData
                if (Array.isArray(beacons)) {
                    setBeaconData(beacons);
                } else {
                    setBeaconData([beacons]);
                }

                //Set zoneData
                if (Array.isArray(zones)) {
                    setZoneData(zones);
                } else {
                    setZoneData([zones]);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    var markers = getPointAtMap(beaconData);

    var dmarkers = getPointAtMap(zoneData);

    const [markersDLayer] = useState<IAzureMapLayerType>("SymbolLayer");
    const [layerOptionsD, setLayerOptionsD] = useState<SymbolLayerOptions>(memoizedOptionsD);

    const [markersLayer] = useState<IAzureMapLayerType>("SymbolLayer");
    const [layerOptions, setLayerOptions] = useState<SymbolLayerOptions>(memoizedOptions);

    const option: IAzureMapOptions = useMemo(() => {
        return {
            authOptions: {
                authType: AuthenticationType.subscriptionKey,
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
    const memoizedMarkerRender: IAzureDataSourceChildren = useMemo(
        (): any => markers.map((marker) => renderPoint(marker.geometry, marker.properties?.name)
        ),
        [markers]
    );

    const memoizedDMarkerRender: IAzureDataSourceChildren = useMemo(
        (): any => dmarkers.map((marker) => renderPoint(marker.geometry, marker.properties?.name)
        ),
        [dmarkers]
    );

    // const memoizedHtmlMarkerRender: IAzureDataSourceChildren = useMemo(
    //   (): any => htmlMarkers.map((marker) => renderHTMLPoint(marker)),
    //   [htmlMarkers]
    // );
    return (
        <>
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
            <AzureMapsProvider>
                <div style={styles.map}>
                    <AzureMap options={option} controls={controls}>
                        <AzureMapDataSourceProvider
                            events={{
                                dataadded: (e: any) => {
                                    console.log("Data on source added", e);
                                },
                            }}
                            id={"markersExample AzureMapDataSourceProvider"}
                        >
                            <AzureMapLayerProvider
                                id={"markersExample AzureMapLayerProvider"}
                                options={layerOptions}
                                events={{
                                    click: clusterClicked,
                                    dbclick: clusterClicked,
                                }}
                                lifecycleEvents={{
                                    layeradded: () => {
                                        console.log("LAYER ADDED TO MAP");
                                    },
                                }}
                                type={markersLayer} />
                            {memoizedMarkerRender}
                        </AzureMapDataSourceProvider>

                        <AzureMapDataSourceProvider
                            events={{
                                dataadded: (e: any) => {
                                    console.log("Data on source added", e);
                                },
                            }}
                            id={"markersExample AzureMapDataSourceProvider2"}
                        >
                            <AzureMapLayerProvider
                                id={"markersExample AzureMapLayerProvider2"}
                                options={layerOptionsD}
                                events={{
                                    click: clusterClicked,
                                    dbclick: clusterClicked,
                                }}
                                lifecycleEvents={{
                                    layeradded: () => {
                                        console.log("LAYER ADDED TO MAP");
                                    },
                                }}
                                type={markersDLayer} />
                            {memoizedDMarkerRender}
                            {/* {memoizedHtmlMarkerRender} */}
                        </AzureMapDataSourceProvider>
                    </AzureMap>
                </div>
            </AzureMapsProvider>
        </>
    );
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

export default memo(MarkersExample);
