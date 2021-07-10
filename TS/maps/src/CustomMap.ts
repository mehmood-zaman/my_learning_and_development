import { User } from "./User";
import { Company } from "./Company";

interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
export class CustomMap {
  googleMap: google.maps.Map;
  constructor(divId) {
    new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(user: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng,
      },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hi there",
      });
    });
  }
}
