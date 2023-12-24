import { useState, useEffect } from "react";
import { fetchJukugo_all } from "@/services/fetchers";


const Hook = () => {

    const [jukugoData, setJukugoData] = useState();

    const fetchAllJukugoData = async () => {
        try {
          let allData = await fetchJukugo_all();
          setJukugoData(allData)
        } catch (error) {
            console.log("error happened.")
        }
      };
      useEffect(() => {
        fetchAllJukugoData();
      }, []);
    return {
        jukugoData
    }
}

export default Hook;

