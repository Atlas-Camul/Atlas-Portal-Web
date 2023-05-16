const BeaconManagement = require('./src/pages/BeaconManagement.jsx');
function addBeacon()
{
    const beaconName = BeaconManagement.getElementById("fullName");
    console.log(beaconName.text);



}

exports.addBeacon = addBeacon;