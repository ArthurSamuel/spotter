import { TileLayer, Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";

export default function LeafletMap() {
  return (
    <MapContainer
      center={[-8.65, 115.22]}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-8.65, 115.22]}>
        <Popup>Hello from Denpasar!</Popup>
      </Marker>
    </MapContainer>
  );
}
