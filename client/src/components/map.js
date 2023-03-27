import {useEffect, useState, React} from "react";
import GoogleMap from './GoogleMap';

function Map() {
  
  //IMPORT CRASH EVENT DATA FROM DJANGO SERVER
  const [crash_event_data, setCrashEventData] = useState();

    // Fetch data --> 1.)
    useEffect(() => {

        fetch(`http://127.0.0.1:8000/api/event/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((data) => {
            const value = data;
            localStorage.setItem('crash', JSON.stringify(value));
            setCrashEventData(JSON.stringify(value));
          });

    }, [setCrashEventData]);

    console.log(crash_event_data)

    const crash = JSON.parse(localStorage.getItem('crash'));

    var locations = [];

    crash.map(item =>(locations.push({
        lng: parseFloat(item.LONGITUDE),
        lat: parseFloat(item.LATITUDE),
        address: item.ON_STREET + ", Gainesville"
    })
))

    console.log(locations);
        

    return (
        <div className="runs-wrapper bg-white rounded-xl h-full w-48 shadow-sx-shadow p-4 flex flex-col">
            <GoogleMap locations={locations} zoomLevel={13} />    
        </div>
    )
}

export default Map
