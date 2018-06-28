/**
 * Created by nherriot on 12/06/18.
 */

var piWifi = require('pi-wifi');
const config = require('config');

var networkDetails = {
  ssid: 'srbackup',
  password: '********',
  key_mgmt: 'WPA-PSK',

};


/**
 * A simple test case that can be used to test connecting to network
 * described in networkDetails.
 * 
 * @run	/> nodejs wifi-switch-network1.js
 * 
 * 
 */ 
piWifi.connectTo (networkDetails, function(err) {
  if(err) {
    console.log('Connection error: ' + err.message);

  } else {
    console.log('success');
  }
});
