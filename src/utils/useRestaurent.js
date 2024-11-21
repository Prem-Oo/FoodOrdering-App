import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../components/config";
const useRestraunt = (resID) => {

    const [menu, setMenu] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // console.log("useRestaurent()-- Menu")
                // console.log(resID);
                const data = await fetch(FETCH_MENU_URL + resID);
                const json = await data.json();
                // console.log(json);
                setMenu(json);

            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [resID]);
    return menu;
}

export default useRestraunt;