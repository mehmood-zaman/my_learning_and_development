interface Mapable {
  location: {
    lat: number;
    lng: number;
  };
}
export class CustomMap {
  googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker = (marker: Mapable): void => {
    const markerPointer = new google.maps.Marker({
      position: marker.location,
      map: this.googleMap,
    });
    markerPointer.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hi there",
      });
      infoWindow.open(this.googleMap, markerPointer);
    });
  };
}
