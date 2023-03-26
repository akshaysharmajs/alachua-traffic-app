import {useEffect, useState, React} from "react";
import GoogleMap from './GoogleMap';





function Map() {

    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      }

    // Set State for Payroll data
    const [crash_event_data, setCrashEventData] = useState();

    // Fetch data --> 1.)
    useEffect(() => {

        // Fetch the Payroll Data related to the logged in User
        fetch(`http://127.0.0.1:8000/api/event/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Token ${localStorage.getItem('token')}`
            },
        })
        .then((res) => res.json())
        .then((data) => {
            const value = data;
            localStorage.setItem('crash', JSON.stringify(value));
            setCrashEventData(JSON.stringify(value));
          });

    }, [setCrashEventData]);

    const crash = JSON.parse(localStorage.getItem('crash'));

    return (
        <div className="runs-wrapper bg-white rounded-xl h-full w-48 shadow-sx-shadow p-4 flex flex-col">
            <GoogleMap location={location} zoomLevel={10} />
        </div>
    )
}

export default Map