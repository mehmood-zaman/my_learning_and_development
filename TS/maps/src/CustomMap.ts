interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  googleMap: google.maps.Map;

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById("map"), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  UserMarker = (user: Mappable) => {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
  };
}
