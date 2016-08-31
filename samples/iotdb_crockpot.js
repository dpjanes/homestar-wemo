/*
 *  How to use this module in IOTDB / HomeStar
 *  This is the best way to do this
 *  Note: to work, this package must have been installed by 'homestar install' 
 */

const iotdb = require('iotdb')
iotdb.use("homestar-wemo");

const things = iotdb.connect('WeMoCrockpot');
things.on("istate", function(thing) {
    console.log("+", "istate", thing.thing_id(), "\n  ", thing.state("istate"));
});
