/*
 *  WeMoSocketModel.js
 *
 *  David Janes
 *  IOTDB
 *  2014-01-26
 */

var iotdb = require("iotdb");

exports.Model = iotdb.make_model('WeMoSocket')
    .facet(":plug")
    .facet(":switch")
    .product("http://www.belkin.com/us/F7C027-Belkin/p/P-F7C027/")
    .name("WeMo Socket")
    .description("Belkin WeMo Socket")
    .io("on", iotdb.boolean.on)
    .make();

exports.binding = {
    bridge: require('../WeMoBridge').Bridge,
    model: exports.Model,
    matchd: {
        'iot:vendor/type': 'urn:Belkin:device:controllee:1',
        'iot:vendor/model': 'Socket',
    },
    connectd: {
        subscribes: [
            'urn:Belkin:service:basicevent:1',
        ],

        data_in: function(paramd) {
            var valued = paramd.rawd['urn:Belkin:service:basicevent:1'];
            if (valued !== undefined) {
                if (valued.BinaryState === '1') {
                    paramd.cookd.on = true;
                } else if (valued.BinaryState === '0') {
                    paramd.cookd.on = false;
                }
            }
        },

        data_out: function(paramd) {
        },
    },
};
