## Scratch Sensor 2.0

Scratch Sensor 2.0 is an Android smartphone app that allows the user to access the Android smartphone sensors in ScratchX. It is completely rewritten from Scratch Sensor 1.0 as Scratch 1.4 and Scratch 2.0 have different protocols.

This note is intended for users familiar with Scratch 2.0.

### What are the requirements of Scratch Sensor 2.0?

- works **only** at [ScratchX](http://scratchx.org)
- the Android smartphone is now a webserver. So you have to enter the IP address of the smartphone in the Scratch program.
- both the smartphone and the computer running ScratchX must be on the same wifi network
- supports multiple android smartphones
- the update rate is determined by the Android OS

### Getting Started

![Scratch Sensor](https://emantpl.github.io/scratch-sensor-2.0/scratch-sensor.png)

1. Install [Scratch Sensor 2.0](https://play.google.com/store/apps/details?id=com.emant.scroid) from the Google Play Store onto your Android phone. 
2. Press **Start**. When the server is running, a notification appears in the notification area of your Android phone. Note the **IP address**. In our example it is 192.168.1.6
3. Click [start.sbx](http://scratchx.org/?url=https://emantpl.github.io/scratch-sensor-2.0/start.sbx) to load the **Getting Started Project** in ScratchX. .
4. Set the addr variable in the project to the **IP address** you noted in step 2.
5. Run the ScratchX project. 
   * When you tilt your phone, the tilt variable value is the same as shown on your phone. 
   * The time the data is accessed from the phone server is also displayed. 
   * The status of the phone web server is also available.
6. You have sucessfully accessed the tilt sensor data from your Android phone. The tilt sensor is a composite sensor derived from the accelerometer sensor.
7. Stop the ScratchX project.
8. Click **Stop** on the Scratch Sensor app to stop the server. The notification will disappear.

### Sample ScratchX Projects

* Getting Started [start.sbx](http://scratchx.org/?url=https://emantpl.github.io/scratch-sensor-2.0/start.sbx)
* Reading sensor data from 2 smartphones [2-scratch-sensors.sbx](http://scratchx.org/?url=https://emantpl.github.io/scratch-sensor-2.0/2-scratch-sensors.sbx)

### ScratchX Extension

[Scratch Sensor 2.0](http://scratchx.org/?url=https://emantpl.github.io/scratch-sensor-2.0/scratch_sensor.js)

### Scratch Sensor App

![Scratch Sensor App](scratch-sensor-a1.png)

#### To turn on/off the server

1. Click **Start** to start the server
1. Notification will appear. Tapping on the notification will bring the app to the foreground.
1. IP address of the phone will be displayed.
1. Click **Stop** to stop the server. The notification will disappear. 

#### Available Sensors

The app will display the sensors available in your phone.

* Accelerometer - x,y,z
* Steps - step count
* Tilt - angle of tilt in degrees
* Position - feet, head (phone standing), front, back (phone lying)
* Light - light intensity in lux
* Compass - 0 North 180 South, in degrees

#### Important Note

Although the app need not be in the foreground, the screen should be left on. The doze mode to extend battery life introduced in Android versions from Marshmallow onwards may turn off the sensors and server.

### Support or Contact

Support is via comments below. You may also [contact us](http://emant.com/149910.page) here.

<div id="disqus_thread"></div>
<script>
var disqus_config = function () {
this.page.url = "https://emantpl.github.io/scratch-sensor-2.0/";
// Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = "1"; 
// Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://lvug.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

