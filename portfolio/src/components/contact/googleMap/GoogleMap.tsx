import { useState, useEffect } from 'react';
import { Loader, LoaderOptions } from 'google-maps';

const Map = () => {
  const [map, setMap] = useState<google.maps.Map | undefined>();
  const [marker, setMarker] = useState<google.maps.Marker | undefined>();

  useEffect(() => {
    const loadMap = async () => {
      const options: LoaderOptions = {};

      const loader = new Loader(
        'AIzaSyBZPWoZUXk1KJxlu0YoPfIWQXyPYL92EY4',
        options
      );

      const google = await loader.load();
      const mapElement = document.getElementById('map');
      if (mapElement) {
        const city = { lat: 24.8846, lng: 67.1291 };
        const mapInstance = new google.maps.Map(mapElement, {
          center: city,
          zoom: 12,
        });
        const markerInstance = new google.maps.Marker({
          position: city,
          map: mapInstance,
          title: 'Drigh Road', // Optional: Set a title for the marker,
          animation: google.maps.Animation.DROP, // Ensure the marker is initially visible
          icon: {
            url: 'https://cdn-icons-png.flaticon.com/512/2875/2875387.png', // Replace with the URL of your custom marker icon
            scaledSize: new google.maps.Size(40, 40), // Adjust the size of the marker icon as needed
          },
        });
        setMap(mapInstance);
        setMarker(markerInstance);
      }
    };

    loadMap();
  }, []);

  return (
    <div
      id="map"
      className="border-slate-400 border-2 md:w-full md:h-full h-[90%] w-[90%]"
    >
      {/* Your map will be rendered here */}
    </div>
  );
};

export default Map;
