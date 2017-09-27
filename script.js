var map;

// First, create an object containing LatLng and population for each city.
var citymap = {
  u1: {
    center: {lat: 21.884889, lng: -102.295444},
    population: 2714856, delito: "Asalto", Num: 60,
    ult: "25/09/17"
  },
  u2: {
    center: {lat: 21.881982, lng: -102.292902},
    population: 8405837
  },
  u3: {
    center: {lat: 21.896238, lng: -102.292387},
    population: 3857799
  },
  u4: {
    center: {lat: 21.928505, lng: -102.339360},
    population: 603502
  },
  u5: {
    center: {lat: 21.928867, lng: -102.339476},
    population: 3857799
  },
  u6: {
    center: {lat: 21.924826, lng: -102.337920},
    population: 603502
  },
  u7: {
    center: {lat: 21.916144, lng: -102.303890},
    population: 2714856
  },
  u8: {
    center: {lat: 21.902676, lng: -102.307463},
    population: 603502
  }
};

var cityX = {
  u1: {
    center: {lat: 21.934124, lng: -102.341518},
    population: 2714856
  },
  u2: {
    center: {lat: 21.938787, lng: -102.341993},
    population: 8405837
  },
  u3: {
    center: {lat: 21.924544, lng: -102.340765},
    population: 3857799
  },
  u4: {
    center: {lat: 21.902080, lng: -102.316385},
    population: 603502
  },
  u5: {
    center: {lat: 21.901620, lng: -102.309129},
    population: 3857799
  },
  u6: {
    center: {lat: 21.870307, lng: -102.302123},
    population: 603502
  },
  u7: {
    center: {lat: 21.903856, lng: -102.296545},
    population: 2714856
  },
  u8: {
    center: {lat: 21.924470, lng: -102.317191},
    population: 603502
  }
};

function initMap(){
    map=new google.maps.Map(document.getElementById('map'),{
        center:{lat:21.880885,lng:-102.295810},
        zoom: 17,
        mapTypeId: 'hybrid'
    });

    // Create a div to hold the control.
    var controlDiv = document.createElement('div');

    // Set CSS for the control border
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Reportar';
    controlUI.style.borderTopLeftRadius = '10%';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Reportar';
    controlUI.appendChild(controlText);
  
    // Create a div to hold the control.
    var controlAdv = document.createElement('div');

    // Set CSS for the control border
    var controlUIA = document.createElement('div');
    controlUIA.style.backgroundColor = '#FF5733';
    controlUIA.style.border = '2px solid #FF5733';
    controlUIA.style.cursor = 'pointer';
    controlUIA.style.marginBottom = '50px';
    controlUIA.style.width = '100%';
    controlAdv.appendChild(controlUIA);

    var controlTextA = document.createElement('div');
    controlTextA.style.color = 'rgb(25,25,25)';
    controlTextA.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlTextA.style.fontSize = '16px';
    controlTextA.style.lineHeight = '38px';
    controlTextA.style.paddingLeft = '5px';
    controlTextA.style.paddingRight = '5px';
    controlTextA.innerHTML = 'Krav Maga: No solo por diversión, por necesidad.';
    controlUIA.appendChild(controlTextA);

    map.controls[google.maps.ControlPosition.RIGHT_CENTER].push(controlDiv);
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(controlAdv);

    var infowindow = new google.maps.InfoWindow({
    });

    var infoWindowX = new google.maps.InfoWindow({
    });

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            var pos ={
                lat:position.coords.latitude,
                lng:position.coords.longitude
            };
            infoWindowX.setPosition(pos);
            infoWindowX.setContent('Ubicación Actual.');
            infoWindowX.open(map);
            map.setCenter(pos);
            
            var infoWindowContent = [
            "<b>Reporte</b><br />",
            "<form id='map-form'>",
            "Delito: <input id='map-from-address' type='text' />",
            "<button type='button' id='Submit'> Submit </button>",
            "</form>"].join("");

            controlUI.addEventListener('click', function() {
            infoWindowX.setContent(infoWindowContent);

            //document.addEventListener('DOMContentLoaded', function() {
            document.getElementById("Submit").addEventListener('click',function ()
            {
             var cCircle = new google.maps.Circle({
                    strokeColor: '#FFFF00',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FFFF00',
                    fillOpacity: 0.35,
                    map: map,
                    center: pos,
                    radius: 10
                });
                var infoWindowContent2 = [
                "Delito " + document.getElementById("map-from-address").value + ". Incidencias: 1. Último: 27/09/17"
                ].join("");
                infoWindowX.setContent(infoWindowContent2); 
                cCircle.addListener('click', function() {
                infoWindowX.open(map,this)
                }); 
            }  );
            //}  );  

            });
            /*google.maps.event.addListener(info, 'domready', function() {
            document.id("map-form").addEvent("submit", function(e) {
                e.stop();
                var cCircle = new google.maps.Circle({
                    strokeColor: '#FFFF00',
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: '#FFFF00',
                    fillOpacity: 0.35,
                    map: map,
                    center: pos,
                    radius: 10
                });
                var infoWindowContent2 = [
                "Delito " + document.getElementById("map-from-address").value + ". Incidencias: 1. Último: 27/09/17"
                ].join("");
                infoWindowX.setContent(infoWindowContent2);
            });
            });*/

        },function(){
            handleLocationError(true,infoWindowX,map.getCenter());
        });
    } else{
        handleLocationError(false,infoWindowX,map.getCenter());
        }
    // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (var city in citymap) {
    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: citymap[city].center,
      radius: Math.sqrt(citymap[city].population) * .02
    });
  }

  for (var city in cityX) {
    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle({
      strokeColor: '#FFFF00',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FFFF00',
      fillOpacity: 0.35,
      map: map,
      center: cityX[city].center,
      radius: Math.sqrt(cityX[city].population) * .02
    });

    cityCircle.addListener('click', function() {
          var pos2 = {
                lat:21.934124,
                lng:-102.341518
            };
            infowindow.setPosition(pos2);
            infowindow.setContent('Delito: Asalto. Incidencias: 60. Último: 25/09/17');
            infowindow.open(map,this)
        });
  }
}

function handleLocationError(browserHasGeolocation,infoWindow,pos){
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                                'Error: The Geolocation service failed.':
                                'Error: Your browser doesn\'t support geolocation');
        }

//google.maps.event.addDomListener(window, 'load', initMap);

/*google.maps.event.addListener(circ, 'click', function(ev){
    infoWindow.setPosition(circ.getCenter());
    infoWindow.open(map);


});*/


