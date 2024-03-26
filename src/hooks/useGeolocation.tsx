import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

type Location = {
  city: string,
  lat: string,
  lon: string
}

export default function useGeoLocation() {
    const [locationData, setLocationData] = useState<Location | null>(null)
    useEffect(() => {
        getLocation();
    }, []);
    async function getLocation() {
        const res = await axios.get("http://ip-api.com/json");
        console.log(res);
        if (res.status === 200)
            setLocationData(res.data)
    }
    return {
      city: locationData?.city,
      lat: locationData?.lat,
      lon: locationData?.lon,
    }
}