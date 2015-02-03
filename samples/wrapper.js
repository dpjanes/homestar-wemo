/*
 *  Use a "bridge_wrapper", which handles all injections
 */

var iotdb = require("iotdb");

var WeMoSocketBridge = require('../WeMoSocketBridge').Bridge;

wrapper = iotdb.bridge_wrapper(new WeMoSocketBridge({
    mdns: true
}));
wrapper.on('discovered', function(bridge) {
    console.log("+ discovered\n ", bridge.meta());

    var on = false;
    setInterval(function() {
        bridge.push({
            on: on,
        });
        on = !on;
    }, 10 * 1000);
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
