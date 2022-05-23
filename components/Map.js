import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export default function Map({geometry, place, address}) {

	return (
		<MapContainer style={{height:"50vh", width:"50vw"}} center={geometry} zoom={13} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={geometry}>
				<Popup>
					<strong>{place}</strong>, <br/> {address}
				</Popup>
			</Marker>
		</MapContainer>
	);
}
