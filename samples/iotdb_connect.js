/*
 *  How to use this module in IOTDB / HomeStar
 *  This is the best way to do this
 *  Note: to work, this package must have been installed by 'homestar install' 
 */

const iotdb = require('iotdb')
iotdb.use("homestar-wemo");

const things = iotdb.connect();
things.on("thing", function(thing) {
    console.log("+", "found thing");
});
things.on("istate", function(thing) {
    console.log("+", "istate", thing.thing_id(), thing.state("istate"));
});

let on = false;
const timer = setInterval(function() {
    things.set(":on", on);
    on = !on;
}, 2000);
