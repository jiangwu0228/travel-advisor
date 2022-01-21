import axios from "axios";


export const getPlacesData = async (type, sw, ne) => {
  try {
    const data = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "2a2b987a6bmsh276f5712854c62fp132404jsnaa3c34cb6c5a",
        },
      }
    );
    return data.data.data;
  } catch (error) {
    console.log(error);
  }
};
