<script>
import GoogleMapLoader from "@/components/GoogleMapLoader";
import MarkerClusterer from "@google/markerclusterer";

export default {
  extends: GoogleMapLoader,
  data() {
    return {
      apiKey: "",
      center: {
        lat: -6.2425342,
        lng: 106.8626478
      }
    };
  },
  computed: {
    darkMode() {
      return this.$store.state.main.darkMode;
    }
  },
  watch: {
    darkMode() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      let self = this;
      var lightStyle = [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5"
            }
          ]
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#f5f5f5"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#dadada"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#616161"
            }
          ]
        },
        {
          featureType: "road.local",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#c9c9c9"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#e0e3e8"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9e9e9e"
            }
          ]
        }
      ];
      var darkStyle = [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#242f3e"
            }
          ]
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#746855"
            }
          ]
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#242f3e"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#bdbdbd"
            }
          ]
        },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#263c3f"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#6b9a76"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#38414e"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#212a37"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#9ca5b3"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#757575"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#746855"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#1f2835"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#f3d19c"
            }
          ]
        },
        {
          featureType: "road.local",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road.local",
          elementType: "labels",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#2f3948"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry",
          stylers: [
            {
              color: "#e5e5e5"
            }
          ]
        },
        {
          featureType: "transit.line",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "geometry.fill",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#d59563"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#17263c"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#171f29"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#515c6d"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#17263c"
            }
          ]
        }
      ];
      let { google, map } = await this.initializeMap({
        apiKey: this.apiKey,
        mapConfig(google) {
          return {
            zoom: 10,
            styles: self.darkMode ? darkStyle : lightStyle,
            zoomControl: true,
            zoomControlOptions: {
              position: google.maps.ControlPosition.LEFT_BOTTOM
            },
            streetViewControl: false,
            center: self.center
          };
        }
      });

      let infoWindow = new google.maps.InfoWindow({
        minWidth: 400,
        maxWidth: 400
      });

      let location = require("@/assets/json/location.json");
      new MarkerClusterer(
        map,
        location.map(function(markerElem) {
          let point = new google.maps.LatLng(
            parseFloat(markerElem.latitude),
            parseFloat(markerElem.longitude)
          );
          let infowincontent = `
            <div class="font-medium">
              ${markerElem.name}
            </div>
            <div class="mt-1 text-gray-600">
              Latitude: ${markerElem.latitude}, Longitude: ${markerElem.longitude}
            </div>`;
          let marker = new google.maps.Marker({
            map: map,
            position: point,
            icon: {
              url: require("@/assets/images/map-marker.png")
            }
          });

          google.maps.event.addListener(marker, "click", function() {
            infoWindow.setContent(infowincontent);
            google.maps.event.addListener(infoWindow, "domready", function() {
              cash(".arrow_box")
                .closest(".gm-style-iw-d")
                .removeAttr("style");
              cash(".arrow_box")
                .closest(".gm-style-iw-d")
                .attr("style", "overflow:visible");
              cash(".arrow_box")
                .closest(".gm-style-iw-d")
                .parent()
                .removeAttr("style");
            });

            infoWindow.open(map, marker);
          });
          return marker;
        }),
        {
          styles: [
            {
              width: 51,
              height: 50,
              textColor: "white",
              url: require("@/assets/images/map-marker-region.png"),
              anchor: [0, 0]
            }
          ]
        }
      );
    }
  }
};
</script>
