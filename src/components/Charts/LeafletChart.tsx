import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { CountryData } from "../../utils/types";
import "leaflet/dist/leaflet.css";

type LeafletMapData = {
  countriesData: CountryData[];
};

function LeafletChart({ countriesData }: LeafletMapData) {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "80vh", width: "100%" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=b5ibGU3a1uvTSlZaurNj"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      {/* Add Circle markers for each country */}
      {countriesData.map((country) => (
        <CircleMarker
          key={country.country}
          center={[country.countryInfo.lat, country.countryInfo.long]}
          radius={Math.sqrt(country.active) * 0.03} // Adjust the radius based on the data
          fillColor="red" // Set a color based on data or other criteria
          fillOpacity={0.4}
          stroke={false}
        >
          <Popup>
            <strong>{country.country}</strong>
            <br />
            Active Cases: {country.active}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

export default LeafletChart;