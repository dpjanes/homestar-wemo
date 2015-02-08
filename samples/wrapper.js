/*
 *  Use a "bridge_wrapper", which handles all injections
 */

var iotdb = require("iotdb");

var WeMoSocket = require('../WeMoSocket');

wrapper = iotdb.bridge_wrapper(WeMoSocket.binding);
wrapper.on('bridge', function(bridge) {
    console.log("+ discovered\n ", bridge.meta());

    var on = false;
    setInterval(function() {
        bridge.push({
            on: on,
        });
        on = !on;
    }, 5 * 1000);
})
wrapper.on('state', function(bridge, state) {
    console.log("+ state", state);
})
wrapper.on('meta', function(bridge) {
    console.log("+ meta", bridge.meta());
})
wrapper.on('disconnected', function(bridge) {
    console.log("+ disconnected", bridge.meta());
})
