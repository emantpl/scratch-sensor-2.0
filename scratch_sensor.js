/* Extension for Scratch Sensor 2.0*/
/* EMant Pte Ltd Dec 2018 */


(function(ext) {
  // Communicate with Android server
  var cachedSensors = {};

  // Get data based on sensor type
  function getSensorData(data, type) {
      var val = null;
      switch (type) {
        case 'time':
          val = data.time;
          break;
        case 'light':
          val = data.light;
          break;
        case 'compass':
          val = data.compass;
          break;
        case 'step':
          val = data.step;
          break;
        case 'tilt':
          val = data.tilt;
          break;
        case 'position':
          val = data.position;
          break;
        case 'ax':
          val = data.accelerometer.x;
          break;
        case 'ay':
          val = data.accelerometer.y;
          break;
        case 'az':
          val = data.accelerometer.z;
          break;
      }
    return(val);
  }

  // Cleanup function when the extension is unloaded
  ext._shutdown = function() {};

  // Status reporting code
  // Use this to report missing hardware, plugin or unsupported browser
  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  };

  ext.getSensor = function(type, location, callback) {
    var val;

    if (!$.isEmptyObject(cachedSensors[location])){
        // waiting for server result or delay timeout, read cache instead
        if (cachedSensors[location].flag || (Date.now()-cachedSensors[location].time<100)) {
          val = getSensorData(cachedSensors[location].data, type);
          console.log("cache",location,val); 
          callback(val); 
          return;   
      }
    }

    if (!$.isEmptyObject(cachedSensors[location])){
    cachedSensors[location] = {data: cachedSensors[location].data, time: cachedSensors[location].time, flag:true};
    }

    var myurl = 'http://'+location+':8080/';

    $.ajax({
      url: myurl,
      dataType: 'json',
      timeout: 1000,
      success: function(data) {
        // successful read from server
        cachedSensors[location] = {data: data, time: Date.now(), flag:false};
        var val = getSensorData(data, type);
        console.log("server",location,val);
        callback(val);
      },
      error: function (jqXHR, status, err) {
        // server error
        var val = null;
        if (!$.isEmptyObject(cachedSensors[location])){
          cachedSensors[location] = {data: cachedSensors[location].data, time: cachedSensors[location].time, flag:false};
          val = getSensorData(cachedSensors[location].data, type);
          } 
        console.log("server error",location,val);
        callback(val);
      }
    });
  };


  // Block and block menu descriptions
  var descriptor = {
    blocks: [
      ['R', '%m.reporterData in %s', 'getSensor', 'tilt', '192.168.1.6'],
    ],
    menus: {
      reporterData: ['step','tilt','position','ax','ay','az','light','compass','time']
    },
    url: 'https://emantpl.github.io/scratch-sensor-2.0/'
  };

  // Register the extension
  ScratchExtensions.register('Scratch Sensor 2.0', descriptor, ext);

})({});
